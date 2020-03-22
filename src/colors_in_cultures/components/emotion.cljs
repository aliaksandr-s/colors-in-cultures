(ns colors-in-cultures.components.emotion
  (:require [rum.core :as rum]
            [cljss.rum :refer-macros [defstyled]]
            [cljss.core :refer-macros [defkeyframes]]
            [colors-in-cultures.db :refer [conn get-emotions-by-color app-state get-color-code]]))

(defkeyframes show []
  {:0%   {:opacity 0}
   :25%  {:opacity 0.25}
   :50%  {:opacity 0.5}
   :75%  {:opacity 0.75}
   :100% {:opacity 1}})

(rum/defc nations-list [nations]
  [:div {:css 
         {:display "flex"
          :flex-direction "column"
          :margin-top "10px"}} 
   (for [nation nations]
     [:div {:key (:nation/name nation)
            :css
            {:margin-bottom "8px"}} 
      [:div {:css
             {:display "flex"
              :align-items "center"}}
       [:img {:css 
              {:width "18px"
               :height "18px"}
              :src (:nation/icon nation)
              :key (:nation/name nation)
              :title (:nation/name nation)}]
       [:span
        {:css
         {:margin-left "8px"
          :font-size "13px"
          :width "100%"}}
        (:nation/name nation)]
       ]])])

(rum/defcs emotion < (rum/local false ::selected?)
  [state title icon-url info color]
  (let [local-selected? (::selected? state)]
    [:div {:on-click (fn [_] (swap! local-selected? not)) 
           :css 
           {:padding "10px"
            :margin "5px"
            :width "110px"
            :height "180px"
            :position "relative"
            :font-size "16px"
            :display "inline-block"
            ; :border (str "3px solid" " " color)
            :border "3px solid black" 
            ; :box-shadow (str "3px 3px" " " color)
            :border-radius "15%"
            :text-transform "Capitalize"
            ; :transition "all 550ms ease"
            :cursor "pointer"
            :opacity (if @local-selected? 1 0.7)
            :&:hover {:opacity 1}
            :transition "all 150ms ease"
            ; :animation (str (show) " " "300ms ease 1")
            ; :&:active {:transform "translateX(5px) translateY(5px)"}
            :transform (if @local-selected? "translateX(5px) translateY(5px)")
            :&:before {:content ""
                       :position "absolute"
                       :top "-3px"
                       :left "-3px"
                       :border "3px solid black" 
                       :border-radius "15%" 
                       :width "110px"
                       :height "180px"
                       :padding "10px"
                       :box-shadow (str "3px 3px" " " color)
                       :transition "all 50ms"
                       ; :transform (if @local-selected? "translateX(-2px) translateY(-2px)")
                       :visibility (if @local-selected? "hidden")
 
                       ; :transform (if selected? "translateX(-2px) translateY(-2px)")
                       ; :visibility (if selected? "hidden")
                       }
            }} 
     [:div {:css 
            {:text-align "center"
             :padding-top "6px"
             :font-size "18px"
             :font-weight "500"
             :padding-bottom "6px"}} 
      title]
     [:div 
      (if @local-selected?
        [:div
         {:style {:animation (str (show) " " "150ms ease 1")}}
         (nations-list info)]
        [:img {:src icon-url
               :style {:margin-top "15px"
                       :animation (str (show) " " "150ms ease 1")}}])]
     ]))

(rum/defc emotions-list < rum/reactive []
  (let [color (rum/react (rum/cursor-in app-state [:selected-color]))
        color-code (get-color-code color)
        emotions (get-emotions-by-color color)]
    [:div
     {:css
      {:padding-top "30px"
       :display "flex"
       :flex-wrap "wrap"
       :justify-content "center"}}
     (for [entity emotions]
       (-> (emotion (:emotion/name (first entity)) 
                    (:emotion/icon (first entity))
                    (second entity)
                    color-code)
           (rum/with-key (:emotion/id (first entity)))))]))

