(ns colors-in-cultures.core
  (:require [rum.core :as rum]))

(rum/defc my-first-comp [text]
  [:div text])

(rum/defc repeat-label [n text]
  [:div (for [x (range n)]
          [:div {:key x :class "label"} text])])

; (rum/mount (my-first-comp "Hello world!") (js/document.getElementById "app"))
(rum/mount (repeat-label 5 "Hello world!") (js/document.getElementById "app"))

(rum/defc label < rum/static [n text]
  [:.label (vec (repeat n text))])

(rum/mount (label 1 "abc") (js/document.getElementById "app"))
