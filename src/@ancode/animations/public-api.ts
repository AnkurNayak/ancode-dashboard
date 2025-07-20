import { expandCollapse } from "@ancode/animations/expand-collapse";
import { fadeIn, fadeInTop, fadeInBottom, fadeInLeft, fadeInRight, fadeOut, fadeOutTop, fadeOutBottom, fadeOutLeft, fadeOutRight } from "@ancode/animations/fade";
import { shake } from "@ancode/animations/shake";
import { slideInTop, slideInBottom, slideInLeft, slideInRight, slideOutTop, slideOutBottom, slideOutLeft, slideOutRight } from "@ancode/animations/slide";
import { zoomIn, zoomOut } from "@ancode/animations/zoom";

export const ancodeAnimations = [
    expandCollapse,
    fadeIn, fadeInTop, fadeInBottom, fadeInLeft, fadeInRight,
    fadeOut, fadeOutTop, fadeOutBottom, fadeOutLeft, fadeOutRight,
    shake,
    slideInTop, slideInBottom, slideInLeft, slideInRight,
    slideOutTop, slideOutBottom, slideOutLeft, slideOutRight,
    zoomIn, zoomOut
];
