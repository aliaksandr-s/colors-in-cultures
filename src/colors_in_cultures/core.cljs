(ns colors-in-cultures.core
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [colors-in-cultures.views.library :refer [library]]
            [colors-in-cultures.db :refer [get-colors get-color-code app-state]]))


; (rum/defc library []
;   [:div "LIBRARY"])

(rum/defc game []
  [:div "GAME"])

(defonce match (atom nil))

(rum/defc current-page < rum/reactive []
  (let [view (rum/react (rum/cursor-in match [:data :view]))]
   [:div
    [:ul
     [:li [:a {:href (rfe/href ::frontpage)} "Back"]]
     [:li ]
     [:li [:a {:href (rfe/href ::game)} "Start"]]
     [:li ]
     [:li [:a {:href (rfe/href ::library)} "Explore the library"]]
     ]
    [:div (view)]]))


(def routes
  [["/"
    {:name ::frontpage
     :view library}]

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
