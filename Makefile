repl:
	rm -rf target/public
	clj -R:nrepl -m nrepl.cmdline --middleware "[cider.nrepl/cider-middleware cider.piggieback/wrap-cljs-repl]"

build:
	rm -rf target/public
	clojure -A:prod
	rm -rf target/public/cljs-out/dev
	cp -r resources/public/* target/public 

.ONESHELL:
serve:
	cd target/public
	serve

deploy: build serve
