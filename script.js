document.addEventListener("DOMContentLoaded", function () {

    // ==============================
    // TYPING EFFECT
    // ==============================

    const typingText = document.querySelector(".typing-text");

    const message =
        "Happy Raksha Bandhan, My Dear Brother ❤️";

    let index = 0;

    function typingEffect() {

        if (index < message.length) {

            typingText.textContent += message.charAt(index);

            index++;

            setTimeout(typingEffect, 70);
        }
    }

    typingEffect();


    // ==============================
    // FLOATING HEARTS
    // ==============================

    function createHeart() {

        const heart =
            document.createElement("div");

        heart.classList.add("floating-heart");

        const heartList = [
            "❤️",
            "💖",
            "💕",
            "💗",
            "💓",
            "💞",
            "✨"
        ];

        heart.innerHTML =
            heartList[
                Math.floor(
                    Math.random() * heartList.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            Math.random() * 20 + 15 + "px";

        heart.style.animationDuration =
            Math.random() * 4 + 4 + "s";

        document.body.appendChild(heart);

        setTimeout(function () {
            heart.remove();
        }, 8000);
    }

    setInterval(createHeart, 500);


    // ==============================
    // OPEN SURPRISE BUTTON
    // ==============================

    const startButton =
        document.getElementById("startBtn");

    if (startButton) {

        startButton.addEventListener(
            "click",
            function () {

                document
                    .querySelector(".message")
                    .scrollIntoView({
                        behavior: "smooth"
                    });

                createConfetti();
            }
        );
    }


    // ==============================
    // SECRET MESSAGE
    // ==============================

    const surpriseButton =
        document.getElementById("surpriseBtn");

    const surpriseMessage =
        document.getElementById("surpriseMessage");

    if (surpriseButton && surpriseMessage) {

        surpriseButton.addEventListener(
            "click",
            function () {

                surpriseMessage.classList.toggle("show");

                if (
                    surpriseMessage.classList.contains(
                        "show"
                    )
                ) {

                    surpriseButton.textContent =
                        "❤️ I Love You Brother ❤️";

                    createConfetti();

                } else {

                    surpriseButton.textContent =
                        "💌 Read My Secret Message";
                }

            }
        );
    }


    // ==============================
    // RAKHI ANIMATION
    // ==============================

    const rakhiButton =
        document.getElementById("rakhiBtn");

    const rakhi =
        document.getElementById("rakhi");

    if (rakhiButton && rakhi) {

        rakhiButton.addEventListener(
            "click",
            function () {

                rakhi.classList.remove(
                    "rakhi-animate"
                );

                // Restart animation
                void rakhi.offsetWidth;

                rakhi.classList.add(
                    "rakhi-animate"
                );

                createConfetti();
            }
        );
    }


    // ==============================
    // FINAL SURPRISE
    // ==============================

    const finalButton =
        document.getElementById("finalBtn");

    if (finalButton) {

        finalButton.addEventListener(
            "click",
            function () {

                createConfetti();

                // More hearts
                for (let i = 0; i < 20; i++) {

                    setTimeout(
                        createHeart,
                        i * 100
                    );
                }

                setTimeout(function () {

                    alert(
                        "🥹❤️ No matter how much we fight...\n\n" +
                        "You will always be my favorite brother!\n\n" +
                        "Happy Raksha Bandhan! 🎀"
                    );

                }, 700);
            }
        );
    }


    // ==============================
    // SCROLL REVEAL
    // ==============================

    const revealElements =
        document.querySelectorAll(".reveal");

    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "active"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(function (element) {

        observer.observe(element);

    });


    // ==============================
    // CONFETTI
    // ==============================

    function createConfetti() {

        const confettiItems = [
            "❤️",
            "💖",
            "💕",
            "✨",
            "🎀",
            "🌸",
            "💫",
            "🥰"
        ];

        for (let i = 0; i < 70; i++) {

            const confetti =
                document.createElement("div");

            confetti.classList.add("confetti");

            confetti.textContent =
                confettiItems[
                    Math.floor(
                        Math.random() *
                        confettiItems.length
                    )
                ];

            confetti.style.left =
                Math.random() * 100 + "vw";

            confetti.style.animationDuration =
                Math.random() * 3 + 2 + "s";

            confetti.style.animationDelay =
                Math.random() + "s";

            document.body.appendChild(confetti);

            setTimeout(function () {

                confetti.remove();

            }, 6000);
        }
    }


    // ==============================
    // MOUSE SPARKLES
    // ==============================

    document.addEventListener(
        "mousemove",
        function (event) {

            const sparkle =
                document.createElement("span");

            sparkle.classList.add(
                "mouse-sparkle"
            );

            sparkle.textContent = "✦";

            sparkle.style.left =
                event.clientX + "px";

            sparkle.style.top =
                event.clientY + "px";

            document.body.appendChild(sparkle);

            setTimeout(function () {

                sparkle.remove();

            }, 700);
        }
    );


    // ==============================
    // PHOTO CLICK EFFECT
    // ==============================

    const photos =
        document.querySelectorAll(".memory img");

    photos.forEach(function (photo) {

        photo.addEventListener(
            "click",
            function () {

                createHeart();

                createConfetti();

            }
        );

    });

});