// ==UserScript==
// @name        NDR ad block
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Block ad on http://www.navratdoreality.com/index.php
// @author       Horkyze
// @match        http://www.navratdoreality.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

var tds = document.getElementsByTagName("td");
var max = tds.length;
tds[0].style.background = "black";
tds[max - 1].style.background = "black";
