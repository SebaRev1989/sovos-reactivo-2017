export default function isResponsiveAndOverBreakPoint(browser, responsiveDrawer) {
  return browser.greaterThan[responsiveDrawer.breakPoint];
}

