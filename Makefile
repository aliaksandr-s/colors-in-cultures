repl:
	clj -R:nrepl -m nrepl.cmdline --middleware "[cider.nrepl/cider-middleware cider.piggieback/wrap-cljs-repl]"

build:
	rm -rf target
	rm -rf www/*
	clojure -A:prod
	rm -rf target/public/cljs-out/dev
	cp -r target/public/cljs-out www
	cp -r resources/public/* www 
	rm -rf target

.ONESHELL:
serve:
	cd target/public
	serve

.ONESHELL:
gh-pages:
	cd www
	git add --all
	git commit -m "Deploy updates"
	git push origin gh-pages
	
deploy: build gh-pages
