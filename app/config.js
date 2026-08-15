/**
 * Site-wide constants that change between event cycles.
 */

// The Luma event page every "Register" call to action points at, e.g.
// "https://lu.ma/exehacks". Set it here once and the nav button, the hero, both event
// cards and the footer all follow.
//
// While it is empty the buttons render as a muted "Registration opens soon" rather than
// linking nowhere, so an unset URL can never ship as a dead or wrong link.
export const LUMA_URL = ""

// Where people are pointed for sponsorship and data questions.
export const CONTACT_EMAIL = "excs@exeterguild.com"
