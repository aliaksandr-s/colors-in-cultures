(ns colors-in-cultures.utils
  (:require [goog.async.Debouncer]))

(defn debounce [f interval]
  (let [dbnc (goog.async.Debouncer. f interval)]
    (fn [& args] (.apply (.-fire dbnc) dbnc (to-array args)))))

(defn preload-image [src]
  (let [i (js/Image.)] 
    (set! (.-src i) src)))

; (preload-image "icons/emotions/ouroboros.svg")


; (defn preload-images [src-list]
;   (doseq [src src-list] 
;     (let [i (js/Image.)] 
;       (js/Promise. (fn [resolve]
;                      (set! (.-src i) src))))))

; (preload-images ["icons/emotions/ouroboros.svg" "icons/emotions/law.svg"])

; (defn save-input! [input]
;   (js/console.log "Saving input" input))

; (def save-input-debounced!
;   (debounce save-input! 5000))

; (save-input-debounced! "hi")
