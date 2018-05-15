let currentAnimationTime = 0;
const centerY = 75;
const amplitude = 20;

animate();
function animate() {
    cLeft.setAttribute('cy', centerY + (amplitude *(Math.sin(currentAnimationTime))));

    cCenter.setAttribute('cy', centerY + (amplitude *(Math.sin(currentAnimationTime - 1))));

    cRight.setAttribute('cy', centerY + (amplitude *(Math.sin(currentAnimationTime - 2))));

    currentAnimationTime += 0.1;
    requestAnimationFrame(animate);
}