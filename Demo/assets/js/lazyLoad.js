function lazyLoad(){

    /* To use it under other functions */
    ll = this;

    /* Set the class that will flag lazy loaded content */
    ll.class = 'lazy-load';

    /* Called when an element is being show on the screen (it receives element as argument) */
    ll.onShow = null;

    /* Called before an element fade on screen (it receives element as argument) */
    ll.onBeforeShow = null;

    /* The source of the data that will be loaded */
    ll.dataSource = 'data-src';

    /* Show debug messages and errors */
    ll.debug = false;

    /* Called when results an error (it receives element as argument) */
    ll.onError = null;

    /* Load all data without scroll */
    ll.firstLoad = function(){
        ll.check();
    }

    /* List of loaded elements */
    ll.loaded = [];

    /* Check if elements must appear or not */
    ll.check = function(){

        /* Get all elements with selected class */
        var elements = document.getElementsByClassName(ll.class);

        if(elements.length==0){
            return false;
            }

        /* Get first element */ 
        var element = elements[0];

        /* Page is the sum of the "distance" from the top and the height of the screen */
        var page = window.pageYOffset + window.innerHeight;

        /* Distance from the element to the top of the page */
        var offsetTop = element.getBoundingClientRect();

        /* If is in screen */
        if(page > offsetTop.top){

            /* Can be customizable by the dev */
            if(ll.onBeforeShow){
                ll.onBeforeShow(element);
            }

            /* Get the source data */
            var src = element.getAttribute(ll.dataSource);

            /* If there is any value*/
            if(src){
                element.setAttribute('src',src);

                /* This method can be setted by the developer */
                if(ll.onShow){
                    ll.onShow(element);
                    }

                /* Remove Class from first element */
                element.classList.remove(ll.class);

                /* Execute again before loaded */
                element.onload = function(){
                    ll.check();    
                    }
                
            } else {

                /* User can set an "debug mode" to get more data */
                if(ll.debug){
                    console.error('Element does not have the data-source attribute ('+ll.dataSource+')', element)
                }

                ll.onError(element);

            } /* Else end */
        } /* Element height */

        /* remove class from loaded elements */
        ll.removeLoaded()
    };

    /* Remove class from loaded elements to better performance on next loop */
    ll.removeLoaded = function(){

        var elements = ll.loaded;

        for(i in elements){
            var element = elements[i];

            /* Remove class */
            element.classList.remove(ll.class);
        }

        /* Clean the loaded elements list (there is no reason to maintain it) */
        ll.loaded = [];
    }

    ll.init = function(){
        
        ll.firstLoad();

        if(ll.debug){
            console.log('LazyLoad:' , ll);
        }

        window.onscroll = function(){
            ll.check();
        }
    }
}
