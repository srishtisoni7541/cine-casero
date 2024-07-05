gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
  multiplier:.2,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();





function loaderAnimation(){
  document.addEventListener("mousemove",function(dets){
    gsap.to(".cursor",{
      y:dets.y-300,
      x:dets.x-600,
      cursor:"pointer",
    })
  })

  var cursor=document.querySelector(".loader");
  cursor.addEventListener("click",function(){
    var tl=gsap.timeline();
    tl.to(".cursor",{
      opacity:0,
      duration:.5,
    })
    .to(".loader h1",{
      opacity:0,
      duration:.5,
      stagger:-.5,
    })
    .to(".loader",{
      y:-1000,
      ease:"expo.Inout",
      duration:1,
    })
  })
  
}
loaderAnimation();


function page1Animation(){
  var tl1=gsap.timeline();
  tl1.from(".img1",{
    scale:0,
    duration:.5,
    delay:5,
  },"elem1")
  tl1.from(".img2",{
    scale:0,
    duration:.5,
    delay:5,
  },"elem1")
  tl1.from(".img3",{
    scale:0,
    duration:.5,
    delay:5,
  },"elem1")
  tl1.from(".img4center",{
    scale:0,
    duration:.5,
    delay:5
  },"elem1")
  tl1.from(".img5",{
    scale:0,
    duration:.5,
    delay:5,
  },"elem1")
  tl1.from(".img6",{
    scale:0,
    duration:.5,
    delay:5,
  },"elem1")
  tl1.from(".img7",{
    scale:0,
    duration:.5,
    delay:5,
  },"elem1")

  gsap.from(".page1overlay",{
    y:-400,
    duration:1,
    delay:6,
  })
  var tl=gsap.timeline({
    scrollTrigger:{
      trigger:".imgcontainer",
      scroller:".main",
      pin:true,
      scrub:2,
      // markers:true,
      start:"top -60%",
    }
  })
  tl.to(".img4center",{
    width:"100%",
    height:"100%",
    duration:7,
  },"elem")
  .to(".imgleftcontainer",{
    left:"-100%",
    duration:7,
    // delay:2,
  },"elem")
  .to(".imgrightcontainer",{
    right:"-100%",
    duration:7,
  },"elem")
}
page1Animation();


function page3Animation(){
  var tl3=gsap.timeline({
    scrollTrigger:{
      trigger:".page3",
      scroller:".main",
      pin:true,
      scrub:2,
    }
  })
  tl3.to(".imgleft",{
    y:-500,
    duration:2,
  },"elem")
  tl3.to(".imgright",{
    y:500,
    duration:2,
  },"elem")


 
}

page3Animation();



function page4Animation(){
  gsap.to(".page4overlay p",{
    y:-800,
    duration:1,
    scrollTrigger:{
      trigger:".page4",
      scroller:".main",
      pin:true,
      scrub:true,
    }
  })
}

page4Animation();

function page5Animation(){
  var tl5=gsap.timeline({
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",

    }
  })

  tl5.from(".page5textcontainer h1",{
    y:140,
    opacity:0,
    duration:1,
  })
  .from(".page5textcontainer p",{
    y:80,
    opacity:0,
    duration:1,
  })
  
  gsap.to(".circlecontainer img",{
    rotate:"360deg",
    duration:15,
    scrollTrigger:{
      trigger:".page5",
      scroller:".main",
      scrub:true
    }
  })
}
page5Animation();



function page6Animation(){
  gsap.to(".page6overlay .img1",{
    y:-900,
    scale:1.5,
    duration:.5,
    scrollTrigger:{
      trigger:".page6",
      scroller:".main",
      // pin:true,
      scrub:true,
    }
  })
  gsap.to(".page6overlay .img2",{
    y:-900,
    scale:1.5,
    duration:.5,
    scrollTrigger:{
      trigger:".page6",
      scroller:".main",
      // pin:true,
      scrub:true,
    }
  })
  gsap.to(".page6overlay .img3",{
    y:-900,
    scale:1.5,
    duration:.5,
    scrollTrigger:{
      trigger:".page6",
      scroller:".main",
      // pin:true,
      scrub:true,
    }
  })
  gsap.to(".page6overlay .img4",{
    y:-900,
    scale:1.5,
    duration:.5,
    scrollTrigger:{
      trigger:".page6",
      scroller:".main",
      // pin:true,
      scrub:true,
    }
  })
  gsap.to(".page6overlay .img5",{
    y:-900,
    scale:1.5,
    duration:.5,
    scrollTrigger:{
      trigger:".page6",
      scroller:".main",
      // pin:true,
      scrub:true,
    }
  })
 
  gsap.to(".page6 .video", {
    borderRadius: "50%",
    duration: 0.2,
    scale:.2,
    scrollTrigger: {
      trigger: ".page6 .video", // Use .page6 .video as the trigger
      scroller: ".main",
      pin: true,
      scrub: true,
    }
  });
  
}

page6Animation();




function page7Animation(){
  gsap.to(".page7overlay",{
    scrollTrigger:{
      trigger:".page7overlay",
      scroller:".main",
      pin:true,
      scrub:2,
    }
  })
  
}
page7Animation();