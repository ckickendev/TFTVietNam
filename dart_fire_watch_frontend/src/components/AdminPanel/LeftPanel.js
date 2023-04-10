import React from "react";

export const LeftPanel = () => {
  return (
    <div className="sidebar-menu">
      <div className="sidebar-menu-inner">
        <header className="logo-env">
          <div className="logo">
            <a href="https://demo.neontheme.com/dashboard/main/">
              <img
                src="https://demo.neontheme.com/assets/images/logo@2x.png"
                width={120}
                alt=""
              />
            </a>
          </div>
          <div className="sidebar-collapse">
            <a href="#" className="sidebar-collapse-icon">
              <i className="entypo-menu" />
            </a>
          </div>
          <div className="sidebar-mobile-menu visible-xs">
            <a href="#" className="with-animation">
              {"{"}" "{"}"}
              <i className="entypo-menu" />
              {"{"}" "{"}"}
            </a>
          </div>
        </header>
        <ul id="main-menu" className="main-menu" style={{}}>
          <li className="active active has-sub root-level">
            <a href="https://demo.neontheme.com/dashboard/main/">
              <i className="entypo-gauge" />
              <span className="title">Dashboard</span>
            </a>
            <ul className>
              <li className="active">
                <a href="https://demo.neontheme.com/dashboard/main/">
                  <span className="title">Dashboard 1</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/dashboard/main-2/">
                  <span className="title">Dashboard 2</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/dashboard/main-3/">
                  <span className="title">Dashboard 3</span>
                </a>
              </li>
              <li className="has-sub">
                <a href="https://demo.neontheme.com/skins/black/">
                  <span className="title">Skins</span>
                </a>
                <ul>
                  <li>
                    <a href="https://demo.neontheme.com/skins/black/">
                      <span className="title">Black Skin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/skins/white/">
                      <span className="title">White Skin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/skins/purple/">
                      <span className="title">Purple Skin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/skins/cafe/">
                      <span className="title">Cafe Skin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/skins/red/">
                      <span className="title">Red Skin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/skins/green/">
                      <span className="title">Green Skin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/skins/yellow/">
                      <span className="title">Yellow Skin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/skins/blue/">
                      <span className="title">Blue Skin</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/skins/facebook/">
                      <span className="title">Facebook Skin</span>
                      <span className="badge badge-secondary badge-roundless">
                        New
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://demo.neontheme.com/dashboard/highlights/">
                  <span className="title">What's New</span>
                  <span className="badge badge-success badge-roundless">
                    v2.0
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className="has-sub root-level">
            <a href="https://demo.neontheme.com/layouts/layout-api/">
              <i className="entypo-layout" />
              <span className="title">Layouts</span>
            </a>
            <ul>
              <li>
                <a href="https://demo.neontheme.com/layouts/layout-api/">
                  <span className="title">Layout API</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/layouts/collapsed-sidebar/">
                  <span className="title">Collapsed Sidebar</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/layouts/fixed-sidebar/">
                  <span className="title">Fixed Sidebar</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/layouts/chat-open/">
                  <span className="title">Chat Open</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/layouts/horizontal-menu-boxed/">
                  <span className="title">Horizontal Menu Boxed</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/layouts/horizontal-menu-fluid/">
                  <span className="title">Horizontal Menu Fluid</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/layouts/mixed-menus/">
                  <span className="title">Mixed Menus</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/layouts/right-sidebar/">
                  <span className="title">Right Sidebar</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/layouts/both-menus-right-sidebar/">
                  <span className="title">Both Menus (Right Sidebar)</span>
                </a>
              </li>
              <li className="has-sub">
                <a href="https://demo.neontheme.com/layouts/page-transition-fade/">
                  <span className="title">Page Enter Transitions</span>
                </a>
                <ul>
                  <li>
                    <a href="https://demo.neontheme.com/layouts/page-transition-fade/">
                      <span className="title">Fade Scale</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/layouts/page-transition-left-in/">
                      <span className="title">Left In</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/layouts/page-transition-right-in/">
                      <span className="title">Right In</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/layouts/page-transition-fade-only/">
                      <span className="title">Fade Only</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://demo.neontheme.com/layouts/boxed/">
                  <span className="title">Boxed Layout</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="root-level">
            <a href="https://demo.neontheme.com/frontend/main/" target="_blank">
              <i className="entypo-monitor" />
              <span className="title">Frontend</span>
            </a>
          </li>
          <li className="has-sub root-level">
            <a href="https://demo.neontheme.com/ui/panels/">
              <i className="entypo-newspaper" />
              <span className="title">UI Elements</span>
            </a>
            <ul>
              <li>
                <a href="https://demo.neontheme.com/ui/panels/">
                  <span className="title">Panels</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/tiles/">
                  <span className="title">Tiles</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/forms/buttons/">
                  <span className="title">Buttons</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/typography/">
                  <span className="title">Typography</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/tabs-accordions/">
                  <span className="title">Tabs &amp; Accordions</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/tooltips-popovers/">
                  <span className="title">Tooltips &amp; Popovers</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/navbars/">
                  <span className="title">Navbars</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/breadcrumbs/">
                  <span className="title">Breadcrumbs</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/badges-label/s">
                  <span className="title">Badges &amp; Labels</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/progress-bars/">
                  <span className="title">Progress Bars</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/modals/">
                  <span className="title">Modals</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/blockquotes/">
                  <span className="title">Blockquotes</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/alerts/">
                  <span className="title">Alerts</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/pagination/">
                  <span className="title">Pagination</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="has-sub root-level">
            <a href="https://demo.neontheme.com/mailbox/main/">
              <i className="entypo-mail" />
              <span className="title">Mailbox</span>
              <span className="badge badge-secondary">8</span>
            </a>
            <ul>
              <li>
                <a href="https://demo.neontheme.com/mailbox/main/">
                  <i className="entypo-inbox" />
                  <span className="title">Inbox</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/mailbox/compose/">
                  <i className="entypo-pencil" />
                  <span className="title">Compose Message</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/mailbox/message/">
                  <i className="entypo-attach" />
                  <span className="title">View Message</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="has-sub root-level">
            <a href="https://demo.neontheme.com/forms/main/">
              <i className="entypo-doc-text" />
              <span className="title">Forms</span>
            </a>
            <ul>
              <li>
                <a href="https://demo.neontheme.com/forms/main/">
                  <span className="title">Basic Elements</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/forms/advanced/">
                  <span className="title">Advanced Plugins</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/forms/wizard/">
                  <span className="title">Form Wizard</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/forms/validation/">
                  <span className="title">Data Validation</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/forms/masks/">
                  <span className="title">Input Masks</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/forms/sliders/">
                  <span className="title">Sliders</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/forms/file-upload/">
                  <span className="title">File Upload</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/forms/wysiwyg/">
                  <span className="title">Editors</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="has-sub root-level">
            <a href="https://demo.neontheme.com/tables/main/">
              <i className="entypo-window" />
              <span className="title">Tables</span>
            </a>
            <ul>
              <li>
                <a href="https://demo.neontheme.com/tables/main/">
                  <span className="title">Basic Tables</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/tables/datatable/">
                  <span className="title">Data Tables</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="has-sub root-level">
            <a href="https://demo.neontheme.com/extra/icons/">
              <i className="entypo-bag" />
              <span className="title">Extra</span>
              <span className="badge badge-info badge-roundless">
                New Items
              </span>
            </a>
            <ul>
              <li className="has-sub">
                <a href="https://demo.neontheme.com/extra/icons/">
                  <span className="title">Icons</span>
                  <span className="badge badge-success">3</span>
                </a>
                <ul>
                  <li>
                    <a href="https://demo.neontheme.com/extra/icons-fontawesome/">
                      <span className="title">Font Awesome</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/extra/icons-entypo/">
                      <span className="title">Entypo</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/extra/icons-glyphicons/">
                      <span className="title">Glyph Icons</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/portlets/">
                  <span className="title">Portlets</span>
                </a>
              </li>
              <li className="has-sub">
                <a href="https://demo.neontheme.com/extra/google-maps/">
                  <span className="title">Maps</span>
                </a>
                <ul>
                  <li>
                    <a href="https://demo.neontheme.com/extra/google-maps/">
                      <span className="title">Google Maps</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/extra/vector-maps/">
                      <span className="title">Vector Maps</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/chat-api/">
                  <span className="title">Chat API</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/calendar/">
                  <span className="title">Calendar</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/calendar-2/">
                  <span className="title">Calendar 2</span>
                  <span className="badge badge-secondary badge-roundless">
                    New
                  </span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/notes/">
                  <span className="title">Notes</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/lockscreen/">
                  <span className="title">Lockscreen</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/login/">
                  <span className="title">Login</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/register/">
                  <span className="title">Register</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/invoice/">
                  <span className="title">Invoice</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/members/">
                  <span className="title">Members</span>
                </a>
              </li>
              <li className="has-sub">
                <a href="https://demo.neontheme.com/extra/gallery/">
                  <span className="title">Gallery</span>
                </a>
                <ul>
                  <li>
                    <a href="https://demo.neontheme.com/extra/gallery/">
                      <span className="title">Albums</span>
                    </a>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/extra/gallery-single/">
                      <span className="title">Single Album</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/profile/">
                  <span className="title">Profile</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/404/">
                  <span className="title">404 Page</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/blank-page/">
                  <span className="title">Blank Page</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/comments/">
                  <span className="title">Comments</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/timeline/">
                  <span className="title">Timeline</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/timeline-centered/">
                  <span className="title">Timeline Centered</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/tocify/">
                  <span className="title">Tocify</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/ui/notifications/">
                  <span className="title">Notifications</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/new-post/">
                  <span className="title">New Post</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/settings/">
                  <span className="title">Settings</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/scrollbox/">
                  <span className="title">Scrollbox</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/image-crop/">
                  <span className="title">Image Crop</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/search/">
                  <span className="title">Search Page</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/language-selector/">
                  <span className="title">Language Selector</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/nestable/">
                  <span className="title">Nestable Lists</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/file-tree/">
                  <span className="title">File Tree</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/extra/load-progress/">
                  <span className="title">Load Progress</span>
                </a>
              </li>
            </ul>
          </li>
          <li className="root-level">
            <a href="https://demo.neontheme.com/extra/charts/">
              <i className="entypo-chart-bar" />
              <span className="title">Charts</span>
            </a>
          </li>
          <li className="has-sub root-level">
            <a href="https://demo.neontheme.com/#">
              <i className="entypo-flow-tree" />
              <span className="title">Menu Levels</span>
            </a>
            <ul>
              <li>
                <a href="https://demo.neontheme.com/#">
                  <i className="entypo-flow-line" />
                  <span className="title">Menu Level 1.1</span>
                </a>
              </li>
              <li>
                <a href="https://demo.neontheme.com/#">
                  <i className="entypo-flow-line" />
                  <span className="title">Menu Level 1.2</span>
                </a>
              </li>
              <li className="has-sub">
                <a href="https://demo.neontheme.com/#">
                  <i className="entypo-flow-line" />
                  <span className="title">Menu Level 1.3</span>
                </a>
                <ul>
                  <li>
                    <a href="https://demo.neontheme.com/#">
                      <i className="entypo-flow-parallel" />
                      <span className="title">Menu Level 2.1</span>
                    </a>
                  </li>
                  <li className="has-sub">
                    <a href="https://demo.neontheme.com/#">
                      <i className="entypo-flow-parallel" />
                      <span className="title">Menu Level 2.2</span>
                    </a>
                    <ul>
                      <li className="has-sub">
                        <a href="https://demo.neontheme.com/#">
                          <i className="entypo-flow-cascade" />
                          <span className="title">Menu Level 3.1</span>
                        </a>
                        <ul>
                          <li>
                            <a href="https://demo.neontheme.com/#">
                              <i className="entypo-flow-branch" />
                              <span className="title">Menu Level 4.1</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://demo.neontheme.com/#">
                          <i className="entypo-flow-cascade" />
                          <span className="title">Menu Level 3.2</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="https://demo.neontheme.com/#">
                      <i className="entypo-flow-parallel" />
                      <span className="title">Menu Level 2.3</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
