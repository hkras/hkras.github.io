/*

【﻿ＰＨＯＴＯＳ】
【﻿ＰＨＯＴＯＳ】
【﻿ＰＨＯＴＯＳ】

 */

//jquery psuedo randomize the photos
const photoItem = $(".photo-item");
for (let iPhotos = 0; iPhotos < photoItem.length; iPhotos++) {
  let target = Math.floor(Math.random() * photoItem.length - 1) + 1;
  let target2 = Math.floor(Math.random() * photoItem.length - 1) +1;
  photoItem.eq(target).before(photoItem.eq(target2));
}


/*

【﻿ＳＣＲＯＬＬ　ＴＯ　ＴＨＥ　ＴＯＰ】
【﻿ＳＣＲＯＬＬ　ＴＯ　ＴＨＥ　ＴＯＰ】
【﻿ＳＣＲＯＬＬ　ＴＯ　ＴＨＥ　ＴＯＰ】

*/

//get button
var topbutton = document.getElementById("toTheTop");

// show top button after user scrolls down 20px from top of document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    topbutton.style.display = "block";
  } else {
    topbutton.style.display = "none";
  }
}

// scroll to the top on click
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
