(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(e,t,n){},,,function(e,t,n){e.exports={button:"FeedbackOptions_button__2xQbN",container:"FeedbackOptions_container__1elYp"}},,,,function(e,t,n){e.exports={title:"Section_title__VPscv"}},function(e,t,n){e.exports={title:"Notification_title__1ieTX"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(6),s=n.n(i),r=(n(17),n(4)),o=n(7),l=n(8),b=n(12),d=n(11),u=(n(18),n(2)),j=n.n(u),h=n(0);var f=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.totalFeedback,i=e.positiveFeedbackPercentage;return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("ul",{className:j.a.list,children:[Object(h.jsxs)("li",{className:j.a.item,children:["Good: ",t]}),Object(h.jsxs)("li",{className:j.a.item,children:["Neutral: ",n]}),Object(h.jsxs)("li",{className:j.a.item,children:["Bad: ",a]}),Object(h.jsxs)("li",{className:j.a.item,children:["Total: ",c]}),Object(h.jsxs)("li",{className:j.a.item,children:["Positive feedbacks: ",i," %"]})]})})},v=n(5),O=n.n(v);var m=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{className:O.a.container,children:t.map((function(e){return Object(h.jsx)("button",{onClick:n(e),type:"button",className:O.a.button,children:e},e)}))})},k=n(9),p=n.n(k);var x=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{className:p.a.title,children:t}),n]})},g=n(10),F=n.n(g);var N=function(e){var t=e.message;return Object(h.jsx)("div",{children:Object(h.jsx)("p",{className:F.a.title,children:t})})},_=function(e){Object(b.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeaveFeedback=function(t){var n=t.currentTarget.name;e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e.increment=function(t){return function(){e.setState((function(e){return Object(r.a)({},t,e[t]+1)}))}},e.totalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.positiveFeedbackPercentage=function(){return Math.round(100*e.state.good/e.totalFeedback())},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=(this.onLeaveFeedback,this.totalFeedback),i=this.positiveFeedbackPercentage,s=Object.keys(this.state);return Object(h.jsxs)("div",{className:"containerApp",children:[Object(h.jsx)(x,{title:"Please leave feedback",children:Object(h.jsx)(m,{options:s,onLeaveFeedback:this.increment})}),c()>0?Object(h.jsx)(x,{title:"Statistics",children:Object(h.jsx)(f,{good:t,neutral:n,bad:a,totalFeedback:c(),positiveFeedbackPercentage:i()})}):Object(h.jsx)(N,{message:"No feedback given"})]})}}]),n}(a.Component),P=_,y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(P,{})}),document.getElementById("root")),y()}],[[20,1,2]]]);
//# sourceMappingURL=main.c88ba0b3.chunk.js.map