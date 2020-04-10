(ns colors-in-cultures.views.frontpage
  (:require [rum.core :as rum]
            [reitit.frontend.easy :as rfe]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.components.button :refer [button]]))

(rum/defc frontpage [] 
  [:div 
   {:css
    {:height "100vh"
     :display "flex"
     :flex-direction "column"
     :align-items "center"
     :justify-content "center"}}
   [:h1 
    [:span "Emotions"]
    [:span "."]
    [:span {:css {:color "#ea402b"}} "red"]]
   [:h2 
    {:css
     {:padding "20px"}} 
    "Ipsum illo minima reiciendis quis ab exercitationem nulla? Nulla eius architecto laborum nihil dolores aperiam, praesentium quod! Cumque facilis a quia animi velit Accusantium officiis optio nulla facilis et Officiis."]
   (button "Start" "#5ac76c" #(rfe/push-state :colors-in-cultures.core/game))
   [:br]
   ; [:a {:href (rfe/href ::core/game)} "game"]
   (button "Explore Library" "#50ade3" #(rfe/push-state :colors-in-cultures.core/library))
   ])
