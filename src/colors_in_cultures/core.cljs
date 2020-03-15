(ns colors-in-cultures.core
  (:require [rum.core :as rum]
            [colors-in-cultures.components.emotion :refer [emotion emotions-list]]
            [colors-in-cultures.components.color :refer [color-select color-range]]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.db :refer [get-colors get-color-code app-state]]))

(rum/defc ttt []
  [:div 
   (emotion "Anger" "svg/078-angry-1.svg" "Hindu")])

(rum/defc app < rum/reactive []
  (let [color (rum/react (rum/cursor-in app-state [:selected-color]))
        color-code (get-color-code color)]
   [:div 
    ; {:style 
    ;       {:background-color color-code
    ;        :height "100vh"}
    ;       }
    (color-range) 
    (emotions-list)
    ]))

; (rum/mount (emotion "Anger" "svg/078-angry-1.svg" "Hindu") (js/document.getElementById "app"))
; (rum/mount (emotions-list) (js/document.getElementById "app"))

; (rum/mount (color-select (second (get-colors conn)) (fn [] (println "hi")) ) (js/document.getElementById "app"))

(rum/mount (app) (js/document.getElementById "app"))

