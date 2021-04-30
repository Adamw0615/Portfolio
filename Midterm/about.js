var tl = gsap.timeline(), 

split = new SplitText("#about-header", {type:"words,chars"}), 

words = split.words; //an array of all the divs that wrap each character

gsap.set("#about-header", {perspective: 400});

tl.to(words, {
  duration: 1.5,
  "--weight": "300",
  ease: "none",
  color: "hsl(+=0, +=70%, +=20%)",
  stagger: {
    each: 0.4,
  }
})
