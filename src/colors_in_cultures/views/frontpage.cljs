(ns colors-in-cultures.views.frontpage
  (:require [rum.core :as rum]
            [reitit.frontend.easy :as rfe]
            [cljss.rum :refer-macros [defstyled]]
            [colors-in-cultures.components.button :refer [button]]))

(rum/defc frontpage [] 
  [:div 
   {:css
    {:display "flex"
     :flex-direction "column"
     :height "100%"
     :justify-content "space-around"
     :align-items "center"}}
   [:h1 
    [:span {:css {:color "#ea402b"}} "Col"]
    [:span "motions"]]
   [:h2 
    {:css
     {:padding "20px"
      :max-width "520px"
      :text-align "center"
      :font-weight "500"}} 
    "This is a game that tries to teach you cultural differences using colors. Try to guess what color represents an emotion in different cultures. Or explore the library to see all of them."]
   [:div 
    {:css 
     {:display "flex"
      :flex-direction "column"
      :align-items "center"
      :margin-bottom "40px"
      "> *" {:margin-bottom "16px"}}}
    (button "Start" "#5ac76c" #(rfe/push-state :colors-in-cultures.core/game))
    (button "Explore Library" "#50ade3" #(rfe/push-state :colors-in-cultures.core/library))
    ]
   ])
