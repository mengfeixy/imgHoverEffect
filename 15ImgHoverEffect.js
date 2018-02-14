/**
 * Created by Amitabha on 2017/11/28.
 */
$.fn.extend({
    effect : function(obj){
        if(obj){
            this.addClass("grid");
            switch (obj.effect){
                case "a" :
                    this.children("figure").addClass("effect-lily");
                    break;
                case "b" :
                    this.children("figure").addClass("effect-sadie");
                    break;
                case "c" :
                    this.children("figure").addClass("effect-roxy");
                    break;
                case "d" :
                    this.children("figure").addClass("effect-bubba");
                    break;
                case "e" :
                    this.children("figure").addClass("effect-romeo");
                    break;
                case "f" :
                    this.children("figure").addClass("effect-layla");
                    break;
                case "g" :
                    this.children("figure").addClass("effect-honey");
                    break;
                case "h" :
                    this.children("figure").addClass("effect-oscar");
                    break;
                case "i" :
                    this.children("figure").addClass("effect-marley");
                    break;
                case "j" :
                    this.children("figure").addClass("effect-ruby");
                    break;
                case "k" :
                    this.children("figure").addClass("effect-milo");
                    break;
                case "l" :
                    this.children("figure").addClass("effect-dexter");
                    break;
                case "m" :
                    this.children("figure").addClass("effect-sarah");
                    break;
                case "n" :
                    this.children("figure").addClass("effect-zoe");
                    break;
                case "o" :
                    this.children("figure").addClass("effect-chico");
                    break;
            }
        }
    }
});


