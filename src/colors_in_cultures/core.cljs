(ns colors-in-cultures.core
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rss]
            [colors-in-cultures.views.library :refer [library]]
            [colors-in-cultures.views.frontpage :refer [frontpage]]
            [colors-in-cultures.views.game :refer [game]]
            ))

(defonce match (atom nil))

(rum/defc container [content]
  [:div {:css 
         {:max-width "var(--md-width)"
          :margin "auto auto"
          :height "100%"}} 
   content])

(rum/defc current-page < rum/reactive []
  (let [view (rum/react (rum/cursor-in match [:data :view]))]
    (container (view))))

(def routes
  [["/"
    {:name ::frontpage
     :view frontpage}]

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
