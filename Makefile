repl:
	clj -R:nrepl -m nrepl.cmdline --middleware "[cider.nrepl/cider-middleware cider.piggieback/wrap-cljs-repl]"

build:
	rm -rf target/public
	clojure -A:prod
	cp -r resources/public/* target/public 

cd-build:
	cd target/public

serve:
	serve

deploy: build cd-build serve
