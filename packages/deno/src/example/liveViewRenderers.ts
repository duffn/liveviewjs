import type {
  LiveViewTemplate,
  PageTitleDefaults,
  SessionData,
  LiveViewPageRenderer,
  LiveViewRootRenderer,
} from "../deps.ts";
import { html, live_title_tag, safe, SessionFlashAdaptor } from "../deps.ts";

/**
 * Render function for the "root" of the LiveView.  Expected that this function will
 * embed the LiveView inside and contain the necessary HTML tags to make the LiveView
 * work including the client javascript.
 * @param pageTitleDefaults the PageTitleDefauls that should be used for the title tag especially if it is a `live_title_tag`
 * @param csrfToken the CSRF token value that should be embedded into a <meta/> tag named "csrf-token". LiveViewJS uses this to validate socket requests
 * @param liveViewContent the content rendered by the LiveView
 * @returns a LiveViewTemplate that can be rendered by the LiveViewJS server
 */
export const pageRenderer: LiveViewPageRenderer = (
  pageTitleDefaults: PageTitleDefaults,
  csrfToken: string,
  liveViewContent: LiveViewTemplate
): LiveViewTemplate => {
  const pageTitle = pageTitleDefaults?.title ?? "";
  const pageTitlePrefix = pageTitleDefaults?.prefix ?? "";
  const pageTitleSuffix = pageTitleDefaults?.suffix ?? "";
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="csrf-token" content="${csrfToken}" />
        ${live_title_tag(pageTitle, { prefix: pageTitlePrefix, suffix: pageTitleSuffix })}
        <script
          defer
          type="text/javascript"
          src="https://raw.githubusercontent.com/floodfx/liveviewjs/main/packages/examples/dist/liveviewjs-examples.browser.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css" />
      </head>
      <body>
        <p><a href="/">← Back</a><br /><br /></p>
        ${safe(liveViewContent)}
      </body>
    </html>
  `;
};

/**
 * Render function used by all LiveViews for common elements, in this case, flash content.
 * @param session the session data for the current request
 * @param liveViewContent the content rendered by the LiveView
 * @returns a LiveViewTemplate to be embedded in the root template
 */
export const rootRenderer: LiveViewRootRenderer = async (
  session: SessionData,
  liveViewContent: LiveViewTemplate
): Promise<LiveViewTemplate> => {
  const flashAdaptor = new SessionFlashAdaptor();
  const infoFlash = (await flashAdaptor.popFlash(session, "info")) || "";
  const errorFlash = (await flashAdaptor.popFlash(session, "error")) || "";
  return html`
    <main role="main" class="container">
      ${infoFlash !== "" ? html`<blockquote><strong>ℹ Info</strong> ${infoFlash}</blockquote>` : ""}
      ${errorFlash !== "" ? html`<blockquote><strong>⚠️ Error</strong> ${errorFlash}</blockquote>` : ""}
      ${safe(liveViewContent)}
    </main>
  `;
};
