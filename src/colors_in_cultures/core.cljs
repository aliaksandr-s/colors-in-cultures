(ns colors-in-cultures.core
  (:require [rum.core :as rum]
            [colors-in-cultures.components.emotion :refer [emotion emotions-list]]
            [colors-in-cultures.components.color :refer [color-select color-range]]
            [cljss.rum :refer-macros [defstyled]]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [colors-in-cultures.db :refer [get-colors get-color-code app-state]]))

(rum/defc test-page []
  [:div 
   (emotion "Anger" "svg/078-angry-1.svg" "Hindu")])

(rum/defc library []
  [:div "LIBRARY"])

(rum/defc game []
  [:div "GAME"])

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

(defonce match (atom nil))

(rum/defc current-page < rum/reactive []
  (let [view (rum/react (rum/cursor-in match [:data :view]))]
   [:div
    [:ul
     [:li [:a {:href (rfe/href ::frontpage)} "Back"]]
     [:li [:a {:href (rfe/href ::game)} "Start"]]
     [:li [:a {:href (rfe/href ::library)} "Explore the library"]]
     ]
    [:div (view)]]))


(def routes
  [["/"
    {:name ::frontpage
     :view app}]

   ["/library"
    {:name ::library
     :view library}]

   ["/game"
    {:name ::game
     :view game}]

   ])

(defn init! []
  (rfe/start!
    (rf/router routes {:data {:coercion rss/coercion}})
    (fn [m] (reset! match m))
    {:use-fragment false})
  (rum/mount (current-page) (.getElementById js/document "app")))

(init!)
