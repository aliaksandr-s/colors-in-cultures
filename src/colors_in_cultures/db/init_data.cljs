(ns colors-in-cultures.db.init-data)

(def schema 
  {:color/name {:db/unique :db.unique/identity}
   :nation/id  {:db/unique :db.unique/identity}
   :emotion/id {:db/unique :db.unique/identity}
   })

(def colors 
  [{:color/name "red"
    :color/code "#ea402b"}
   {:color/name "green"
    :color/code "#5ac76c"}
   {:color/name "yellow"
    :color/code "#fae368"}
   {:color/name "purple"
    :color/code "#7b68ab"}
   {:color/name "orange"
    :color/code "#ee841e"}
   {:color/name "pink"
    :color/code "#f091ab"}
   {:color/name "gold"
    :color/code "#f6cb63"}
   {:color/name "blue"
    :color/code "#50ade3"}
   {:color/name "white"
    :color/code "#ffffff"}
   {:color/name "grey"
    :color/code "#b3b3b3"}
   {:color/name "silver"
    :color/code "#9cafbb"}
   {:color/name "black"
    :color/code "#000000"}
   {:color/name "brown"
    :color/code "#A9713C"}])

(def nations
  [{:nation/id   "A"
    :nation/icon "icons/cultures/cowboy-hat.svg"
    :nation/name "West. American"}
   {:nation/id   "B"
    :nation/icon "icons/cultures/fuji.svg"
    :nation/name "Japanese"}
   {:nation/id   "C"
    :nation/icon "icons/cultures/brahma.svg"
    :nation/name "Hindu"}
   {:nation/id   "D"
    :nation/icon "icons/cultures/indian.svg"
    :nation/name "Native American"}
   {:nation/id   "E"
    :nation/icon "icons/cultures/dragon.svg"
    :nation/name "Chinese"}
   {:nation/id   "F"
    :nation/icon "icons/cultures/monk.svg"
    :nation/name "Asian"}
   {:nation/id   "G"
    :nation/icon "icons/cultures/communist.svg"
    :nation/name "East. European"}
   {:nation/id   "H"
    :nation/icon "icons/cultures/arab.svg"
    :nation/name "Arab"}
   {:nation/id   "I"
    :nation/icon "icons/cultures/shield.svg"
    :nation/name "African"}
   {:nation/id   "J"
    :nation/icon "icons/cultures/maracas.svg"
    :nation/name "South American"}])

(def emotions
  [
   {:emotion/id   "1"
    :emotion/name "Anger"
    :emotion/icon "icons/emotions/angry-pineapple.svg" 
    :emotion/relations [["A" "red"] 
                        ["B" "red"]
                        ["C" "black"]
                        ["G" "red"]
                        ["I" "red"]]}
   {:emotion/id   "2"
    :emotion/name "Creativity"
    :emotion/icon "icons/emotions/creativity.svg" 
    :emotion/relations [["C" "blue"]]}
   {:emotion/id   "3"
    :emotion/name "Authority"
    :emotion/icon "icons/emotions/law.svg" 
    :emotion/relations [["A" "black"]]}
   {:emotion/id   "4"
    :emotion/name "Bad Luck"
    :emotion/icon "icons/emotions/black-cat.svg" 
    :emotion/relations [["B" "black"]]}
   {:emotion/id   "5"
    :emotion/name "Balance"
    :emotion/icon "icons/emotions/yin-yang.svg" 
    :emotion/relations [["B" "orange"]
                        ["D" "black"]
                        ["F" "green"]]}
   {:emotion/id   "6"
    :emotion/name "Beauty"
    :emotion/icon "icons/emotions/nail.svg" 
    :emotion/relations [["A" "purple"]]}
   ; {:emotion/id   "7"
   ;  :emotion/name "Calm"
   ;  :emotion/icon "svg/006-excited.svg" 
   ;  :emotion/relations []}
   {:emotion/id   "8"
    :emotion/name "Celebration"
    :emotion/icon "icons/emotions/balloon.svg" 
    :emotion/relations [["B" "purple"]
                        ["E" "black"]]}
   {:emotion/id   "9"
    :emotion/name "Children"
    :emotion/icon "icons/emotions/rocking-horse.svg" 
    :emotion/relations [["A" "pink"]
                        ["B" "pink"]
                        ["F" "white"]]}
   {:emotion/id   "10"
    :emotion/name "Cold"
    :emotion/icon "icons/emotions/snowflake.svg" 
    :emotion/relations [["A" "blue"]
                        ["B" "blue"]
                        ["D" "blue"]]}
   {:emotion/id   "11"
    :emotion/name "Compassion"
    :emotion/icon "icons/emotions/mind.svg" 
    :emotion/relations [["C" "green"]]}
   {:emotion/id   "12"
    :emotion/name "Courage"
    :emotion/icon "icons/emotions/knight.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "yellow"]
                        ["C" "orange"]
                        ["G" "red"]]}
   {:emotion/id   "13"
    :emotion/name "Cowardice"
    :emotion/icon "icons/emotions/chicken.svg" 
    :emotion/relations [["A" "yellow"]
                        ["B" "yellow"]]}
   {:emotion/id   "14"
    :emotion/name "Cruelty"
    :emotion/icon "icons/emotions/violence.svg" 
    :emotion/relations [["A" "purple"]]}
   {:emotion/id   "15"
    :emotion/name "Danger"
    :emotion/icon "icons/emotions/under-construction.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "red"]
                        ["D" "yellow"]]}
   {:emotion/id   "16"
    :emotion/name "Death"
    :emotion/icon "icons/emotions/gravestone.svg" 
    :emotion/relations [["A" "black"]
                        ["B" "black"]
                        ["C" "white"]
                        ["D" "black"]
                        ["E" "white"]
                        ["H" "silver"]
                        ["J" "green"]]}
   {:emotion/id   "17"
    :emotion/name "Decadence"
    :emotion/icon "icons/emotions/toast.svg" 
    :emotion/relations [["A" "purple"]
                        ["B" "purple"]]}
   {:emotion/id   "18"
    :emotion/name "Deceit"
    :emotion/icon "icons/emotions/crossed-fingers.svg" 
    :emotion/relations [["B" "yellow"]]}
   {:emotion/id   "19"
    :emotion/name "Desire"
    :emotion/icon "icons/emotions/desire.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "red"]
                        ["C" "orange"]]}
   {:emotion/id   "20"
    :emotion/name "Earthy"
    :emotion/icon "icons/emotions/soil.svg" 
    :emotion/relations [["A" "brown"]
                        ["E" "brown"]]}
   {:emotion/id   "21"
    :emotion/name "Energy"
    :emotion/icon "icons/emotions/battery.svg" 
    :emotion/relations [["A" "yellow"]
                        ["B" "orange"]
                        ["C" "red"]]}
   {:emotion/id   "22"
    :emotion/name "Erotic"
    :emotion/icon "icons/emotions/sexual.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "pink"]
                        ["C" "red"]]}
   {:emotion/id   "23"
    :emotion/name "Eternity"
    :emotion/icon "icons/emotions/ouroboros.svg" 
    :emotion/relations [["A" "black"]
                        ["B" "green"]
                        ["F" "green"]]}
   {:emotion/id   "24"
    :emotion/name "Evil"
    :emotion/icon "icons/emotions/evil.svg" 
    :emotion/relations [["A" "black"]
                        ["B" "black"]
                        ["C" "black"]
                        ["F" "black"]]}
   {:emotion/id   "25"
    :emotion/name "Excitement"
    :emotion/icon "icons/emotions/excited.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "red"]]}
   {:emotion/id   "26"
    :emotion/name "Family"
    :emotion/icon "icons/emotions/family.svg" 
    :emotion/relations [["E" "orange"]
                        ["F" "green"]]}
   {:emotion/id   "27"
    :emotion/name "Femininity"
    :emotion/icon "icons/emotions/feminism.svg" 
    :emotion/relations [["A" "pink"]]}
   {:emotion/id   "28"
    :emotion/name "Fertility"
    :emotion/icon "icons/emotions/fertilize.svg" 
    :emotion/relations [["E" "red"]]}
   {:emotion/id   "29"
    :emotion/name "Flamboyance"
    :emotion/icon "icons/emotions/flamingo.svg" 
    :emotion/relations [["A" "purple"]
                        ["B" "orange"]
                        ["F" "purple"]]}
   {:emotion/id   "30"
    :emotion/name "Freedom"
    :emotion/icon "icons/emotions/freedom.svg" 
    :emotion/relations [["A" "blue"]]}
   {:emotion/id   "31"
    :emotion/name "Friendly"
    :emotion/icon "icons/emotions/hug.svg" 
    :emotion/relations [["A" "orange"]
                        ["D" "grey"]]}
   {:emotion/id   "32"
    :emotion/name "Fun"
    :emotion/icon "icons/emotions/fun.svg" 
    :emotion/relations [["A" "yellow"]
                        ["C" "yellow"]]}
   {:emotion/id   "33"
    :emotion/name "God"
    :emotion/icon "icons/emotions/god.svg" 
    :emotion/relations [["B" "purple"]
                        ["C" "yellow"]
                        ["H" "green"]]}
   {:emotion/id   "34"
    :emotion/name "Gods"
    :emotion/icon "icons/emotions/gods.svg" 
    :emotion/relations [["C" "blue"]]}
   {:emotion/id   "35"
    :emotion/name "Good Luck"
    :emotion/icon "icons/emotions/shamrock.svg" 
    :emotion/relations [["A" "green"]
                        ["B" "green"]
                        ["E" "red"]
                        ["G" "red"]
                        ["H" "green"]
                        ["I" "red"]]}
   {:emotion/id   "36"
    :emotion/name "Gratitude"
    :emotion/icon "icons/emotions/gratitude.svg" 
    :emotion/relations [["D" "purple"]]}
   {:emotion/id   "37"
    :emotion/name "Growth"
    :emotion/icon "icons/emotions/garden.svg" 
    :emotion/relations [["A" "green"]
                        ["E" "green"]]}
   {:emotion/id   "38"
    :emotion/name "Happiness"
    :emotion/icon "icons/emotions/happy-pineapple.svg" 
    :emotion/relations [["A" "yellow"]
                        ["C" "green"]
                        ["D" "white"]
                        ["E" "red"]
                        ["F" "red"]]}
   {:emotion/id   "39"
    :emotion/name "Healing"
    :emotion/icon "icons/emotions/leaves.svg" 
    :emotion/relations [["A" "blue"]
                        ["D" "orange"]]}
   {:emotion/id   "40"
    :emotion/name "Healthy"
    :emotion/icon "icons/emotions/harvest.svg" 
    :emotion/relations [["B" "pink"]
                        ["E" "yellow"]]}
   {:emotion/id   "41"
    :emotion/name "Heat"
    :emotion/icon "icons/emotions/heat.svg" 
    :emotion/relations [["A" "red"]
                        ["C" "red"]
                        ["G" "red"]
                        ["H" "red"]]}
   {:emotion/id   "42"
    :emotion/name "Heaven"
    :emotion/icon "icons/emotions/heaven.svg" 
    :emotion/relations [["A" "white"]
                        ["B" "yellow"]
                        ["H" "green"]]}
   {:emotion/id   "43"
    :emotion/name "Holiness"
    :emotion/icon "icons/emotions/monk.svg" 
    :emotion/relations [["B" "white"]
                        ["F" "yellow"]]}
   {:emotion/id   "44"
    :emotion/name "Illness"
    :emotion/icon "icons/emotions/illness.svg" 
    :emotion/relations [["B" "yellow"]
                        ["C" "yellow"]]}
   {:emotion/id   "45"
    :emotion/name "Insight"
    :emotion/icon "icons/emotions/insight.svg" 
    :emotion/relations [["B" "purple"]
                        ["C" "green"]
                        ["D" "yellow"]]}
   {:emotion/id   "46"
    :emotion/name "Intelligence"
    :emotion/icon "icons/emotions/artificial-intelligence.svg" 
    :emotion/relations [["A" "blue"]
                        ["B" "silver"]
                        ["C" "white"]
                        ["F" "black"]]}
   {:emotion/id   "47"
    :emotion/name "Intuition"
    :emotion/icon "icons/emotions/visualize.svg" 
    :emotion/relations [["C" "purple"]
                        ["D" "blue"]]}
   {:emotion/id   "48"
    :emotion/name "Religion"
    :emotion/icon "icons/emotions/pray.svg" 
    :emotion/relations [["B" "yellow"]
                        ["C" "green"]
                        ["H" "green"]
                        ["I" "green"]]}
   {:emotion/id   "49"
    :emotion/name "Jealousy"
    :emotion/icon "icons/emotions/jealousy.svg" 
    :emotion/relations [["A" "green"]
                        ["B" "green"]]}
   {:emotion/id   "50"
    :emotion/name "Joy"
    :emotion/icon "icons/emotions/sunbathing.svg" 
    :emotion/relations [["B" "yellow"]
                        ["C" "yellow"]]}
   {:emotion/id   "51"
    :emotion/name "Learning"
    :emotion/icon "icons/emotions/brain.svg" 
    :emotion/relations [["D" "orange"]
                        ["E" "orange"]]}
   {:emotion/id   "52"
    :emotion/name "Life"
    :emotion/icon "icons/emotions/ladybug.svg" 
    :emotion/relations [["B" "blue"]
                        ["C" "green"]
                        ["E" "green"]
                        ["I" "green"]]}
   {:emotion/id   "53"
    :emotion/name "Love"
    :emotion/icon "icons/emotions/heart.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "red"]
                        ["C" "green"]
                        ["D" "yellow"]
                        ["G" "red"]
                        ["I" "blue"]]}
   {:emotion/id   "54"
    :emotion/name "Loyalty"
    :emotion/icon "icons/emotions/dog.svg" 
    :emotion/relations [["A" "blue"]
                        ["B" "blue"]
                        ["G" "blue"]]}
   {:emotion/id   "55"
    :emotion/name "Luxury"
    :emotion/icon "icons/emotions/value.svg" 
    :emotion/relations [["A" "white"]]}
   {:emotion/id   "56"
    :emotion/name "Marriage"
    :emotion/icon "icons/emotions/ring.svg" 
    :emotion/relations [["A" "white"]
                        ["C" "red"]
                        ["E" "red"]]}
   {:emotion/id   "57"
    :emotion/name "Modesty"
    :emotion/icon "icons/emotions/flower.svg" 
    :emotion/relations [["A" "purple"]
                        ["B" "gray"]]}
   {:emotion/id   "58"
    :emotion/name "Money"
    :emotion/icon "icons/emotions/money.svg" 
    :emotion/relations [["A" "gold"]
                        ["B" "blue"]
                        ["E" "gold"]
                        ["F" "gold"]]}
   {:emotion/id   "59"
    :emotion/name "Mourning"
    :emotion/icon "icons/emotions/mourning.svg" 
    :emotion/relations [["A" "black"]
                        ["E" "white"]
                        ["G" "yellow"]
                        ["J" "purple"]]}
   {:emotion/id   "60"
    :emotion/name "Mystery"
    :emotion/icon "icons/emotions/sherlock-holmes.svg" 
    :emotion/relations [["A" "purple"]
                        ["B" "purple"]]}
   {:emotion/id   "61"
    :emotion/name "Nature"
    :emotion/icon "icons/emotions/plant.svg" 
    :emotion/relations [["A" "green"]
                        ["B" "green"]]}
   {:emotion/id   "62"
    :emotion/name "Passion"
    :emotion/icon "icons/emotions/motivation.svg" 
    :emotion/relations [["A" "red"]
                        ["B" "red"]
                        ["C" "red"]
                        ["D" "red"]
                        ["G" "red"]]}
   {:emotion/id   "63"
    :emotion/name "Peace"
    :emotion/icon "icons/emotions/peace.svg" 
    :emotion/relations [["A" "yellow"]
                        ["B" "blue"]
                        ["C" "white"]
                        ["D" "white"]
                        ["H" "silver"]
                        ["I" "blue"]]}
   {:emotion/id   "64"
    :emotion/name "Penance"
    :emotion/icon "icons/emotions/shalat.svg" 
    :emotion/relations [["C" "black"]
                        ["F" "black"]]}
   {:emotion/id   "65"
    :emotion/name "Power"
    :emotion/icon "icons/emotions/power.svg" 
    :emotion/relations [["F" "yellow"]
                        ["G" "red"]]}
   {:emotion/id   "66"
    :emotion/name "Personal power"
    :emotion/icon "icons/emotions/fist.svg" 
    :emotion/relations [["A" "purple"]
                        ["C" "yellow"]
                        ["D" "green"]]}
   {:emotion/id   "67"
    :emotion/name "Purity"
    :emotion/icon "icons/emotions/purity.svg" 
    :emotion/relations [["A" "white"]
                        ["B" "white"]
                        ["E" "white"]
                        ["F" "white"]
                        ["H" "silver"]]}
   {:emotion/id   "68"
    :emotion/name "Radicalism"
    :emotion/icon "icons/emotions/attack.svg" 
    :emotion/relations [["A" "red"]
                        ["G" "red"]]}
   {:emotion/id   "69"
    :emotion/name "Rational"
    :emotion/icon "icons/emotions/reason.svg" 
    :emotion/relations [["A" "blue"]
                        ["B" "blue"]]}
   {:emotion/id   "70"
    :emotion/name "Reliable"
    :emotion/icon "icons/emotions/trust.svg" 
    :emotion/relations [["A" "brown"]
                        ["B" "gray"]]}
   {:emotion/id   "71"
    :emotion/name "Repels Evil"
    :emotion/icon "icons/emotions/amulet.svg" 
    :emotion/relations [["A" "yellow"]
                        ["B" "red"]
                        ["C" "yellow"]
                        ["E" "green"]
                        ["F" "yellow"]]}
   {:emotion/id   "72"
    :emotion/name "Respect"
    :emotion/icon "icons/emotions/respect.svg" 
    :emotion/relations [["A" "gray"]
                        ["B" "white"]
                        ["D" "silver"]
                        ["E" "yellow"]]}
   {:emotion/id   "73"
    :emotion/name "Royalty"
    :emotion/icon "icons/emotions/crown.svg" 
    :emotion/relations [["E" "yellow"]]}
   {:emotion/id   "74"
    :emotion/name "Self-cultivation"
    :emotion/icon "icons/emotions/meditation.svg" 
    :emotion/relations [["D" "black"]
                        ["F" "black"]]}
   {:emotion/id   "75"
    :emotion/name "Strength"
    :emotion/icon "icons/emotions/healthy.svg" 
    :emotion/relations [["B" "red"]
                        ["F" "yellow"]
                        ["H" "yellow"]]}
   {:emotion/id   "76"
    :emotion/name "Style"
    :emotion/icon "icons/emotions/sun-glasses.svg" 
    :emotion/relations [["A" "black"]
                        ["B" "black"]]}
   {:emotion/id   "77"
    :emotion/name "Success"
    :emotion/icon "icons/emotions/prize.svg" 
    :emotion/relations [["D" "red"]
                        ["E" "red"]
                        ["F" "red"]
                        ["I" "green"]
                        ["J" "red"]]}
   {:emotion/id   "78"
    :emotion/name "Trouble"
    :emotion/icon "icons/emotions/trouble.svg" 
    :emotion/relations [["D" "blue"]
                        ["J" "blue"]]}
   {:emotion/id   "79"
    :emotion/name "Truce"
    :emotion/icon "icons/emotions/bird.svg" 
    :emotion/relations [["A" "white"]
                        ["B" "white"]
                        ["C" "white"]
                        ["E" "white"]
                        ["G" "white"]
                        ["H" "silver"]
                        ["I" "silver"]]}
   {:emotion/id   "80"
    :emotion/name "Trust"
    :emotion/icon "icons/emotions/collaboration.svg" 
    :emotion/relations [["G" "white"]]}
   {:emotion/id   "81"
    :emotion/name "Unhappiness"
    :emotion/icon "icons/emotions/crying.svg" 
    :emotion/relations [["A" "blue"]
                        ["B" "black"]
                        ["D" "blue"]]}
   {:emotion/id   "82"
    :emotion/name "Virtue"
    :emotion/icon "icons/emotions/water.svg" 
    :emotion/relations [["A" "purple"]
                        ["G" "blue"]]}
   {:emotion/id   "83"
    :emotion/name "Warmth"
    :emotion/icon "icons/emotions/christmas.svg" 
    :emotion/relations [["B" "orange"]]}
   {:emotion/id   "84"
    :emotion/name "Wisdom"
    :emotion/icon "icons/emotions/owl.svg" 
    :emotion/relations [["B" "purple"]
                        ["C" "purple"]
                        ["D" "brown"]
                        ["G" "blue"]]}
   ])

(def init-data [colors nations emotions])
