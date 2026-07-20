"use strict";

/* =========================
   HEADER SCROLL
========================= */

const goldHeader = document.querySelector(".gold-header");

function updateGoldHeader() {
    if (!goldHeader) {
        return;
    }

    goldHeader.classList.toggle(
        "scrolled",
        window.scrollY > 25
    );
}

window.addEventListener(
    "scroll",
    updateGoldHeader,
    { passive: true }
);

updateGoldHeader();


/* =========================
   STUDIO TOOLS
========================= */

const goldStudioTools =
    document.querySelectorAll(".studio-tool");

const goldPanelTitle =
    document.getElementById("goldPanelTitle");

const goldToolTitles = {
    face: "Forme du visage",
    hair: "Style de cheveux",
    eyes: "Forme des yeux",
    clothes: "Choix de la tenue",
    extras: "Accessoires Gold"
};

goldStudioTools.forEach((button) => {
    button.addEventListener("click", () => {

        goldStudioTools.forEach((tool) => {
            tool.classList.remove("active");
        });

        button.classList.add("active");

        const selectedTool =
            button.dataset.goldTool;

        if (goldPanelTitle) {
            goldPanelTitle.textContent =
                goldToolTitles[selectedTool];
        }

    });
});


/* =========================
   FACE SHAPES
========================= */

const goldShapeButtons =
    document.querySelectorAll("[data-gold-face]");

const goldAvatarFace =
    document.querySelector(".gold-avatar-face");

const goldFaceShapes = {
    oval: "48% 48% 46% 46% / 42% 42% 58% 58%",
    round: "50% / 48%",
    square: "28% 28% 34% 34% / 25% 25% 45% 45%",
    long: "45% 45% 43% 43% / 36% 36% 64% 64%"
};

goldShapeButtons.forEach((button) => {
    button.addEventListener("click", () => {

        goldShapeButtons.forEach((shape) => {
            shape.classList.remove("active");
        });

        button.classList.add("active");

        const selectedShape =
            button.dataset.goldFace;

        if (goldAvatarFace) {
            goldAvatarFace.style.borderRadius =
                goldFaceShapes[selectedShape];
        }

    });
});


/* =========================
   SKIN COLORS
========================= */

const goldColorButtons =
    document.querySelectorAll("[data-gold-skin]");

const goldSkinName =
    document.getElementById("goldSkinName");

goldColorButtons.forEach((button) => {
    button.addEventListener("click", () => {

        goldColorButtons.forEach((color) => {
            color.classList.remove("active");
        });

        button.classList.add("active");

        document.documentElement.style.setProperty(
            "--skin-color",
            button.dataset.goldSkin
        );

        if (goldSkinName) {
            goldSkinName.textContent =
                button.dataset.goldSkinName;
        }

    });
});


/* =========================
   RANDOM STYLE
========================= */

const goldRandomButton =
    document.getElementById("goldRandomButton");

const goldHairPieces =
    document.querySelectorAll(".hair-piece");

const goldAvatarBody =
    document.querySelector(".gold-avatar-body");

const goldSkinColors = [
    "#f3b8a4",
    "#d99379",
    "#aa6a50",
    "#70412f"
];

const goldHairColors = [
    "#17171b",
    "#4d3028",
    "#88542f",
    "#d2a65f",
    "#ff007f"
];

const goldClothingColors = [
    ["#ff007f", "#9f004f"],
    ["#d6a83d", "#76510d"],
    ["#6943d8", "#321974"],
    ["#315efb", "#172978"],
    ["#141418", "#050506"]
];

goldRandomButton?.addEventListener("click", () => {

    const randomSkin =
        goldSkinColors[
            Math.floor(Math.random() * goldSkinColors.length)
        ];

    const randomHair =
        goldHairColors[
            Math.floor(Math.random() * goldHairColors.length)
        ];

    const randomClothes =
        goldClothingColors[
            Math.floor(Math.random() * goldClothingColors.length)
        ];

    document.documentElement.style.setProperty(
        "--skin-color",
        randomSkin
    );

    goldHairPieces.forEach((piece) => {
        piece.style.background = `
            linear-gradient(
                145deg,
                ${randomHair},
                color-mix(
                    in srgb,
                    ${randomHair} 55%,
                    black
                )
            )
        `;
    });

    if (goldAvatarBody) {
        goldAvatarBody.style.background = `
            linear-gradient(
                145deg,
                ${randomClothes[0]},
                ${randomClothes[1]}
            )
        `;
    }

});
/* =========================
   GOLD FULL STUDIO
========================= */

const studioAvatarFace =
    document.querySelector(".studio-avatar-face");

const studioAvatarHair =
    document.querySelector(".studio-avatar-hair");

const studioAvatarEyes =
    document.querySelectorAll(".studio-avatar-eyes span");

const studioPreviewStage =
    document.querySelector(".gold-preview-stage");

const studioFullAvatar =
    document.getElementById("studioFullAvatar");


/* =========================
   FACE OPTIONS
========================= */

const studioFaceButtons =
    document.querySelectorAll("[data-studio-face]");

const studioFaceShapes = {
    oval: {
        radius: "48% 48% 46% 46% / 42% 42% 58% 58%",
        name: "Ovale"
    },

    round: {
        radius: "50% / 48%",
        name: "Rond"
    },

    square: {
        radius: "28% 28% 35% 35% / 25% 25% 45% 45%",
        name: "Carré"
    },

    long: {
        radius: "45% 45% 43% 43% / 36% 36% 64% 64%",
        name: "Allongé"
    }
};

studioFaceButtons.forEach((button) => {
    button.addEventListener("click", () => {

        studioFaceButtons.forEach((option) => {
            option.classList.remove("active");
        });

        button.classList.add("active");

        const faceStyle =
            studioFaceShapes[button.dataset.studioFace];

        if (studioAvatarFace) {
            studioAvatarFace.style.borderRadius =
                faceStyle.radius;
        }

        const summaryFace =
            document.getElementById("summaryFace");

        if (summaryFace) {
            summaryFace.textContent =
                faceStyle.name;
        }

    });
});


/* =========================
   STUDIO SKIN
========================= */

const studioSkinButtons =
    document.querySelectorAll("[data-studio-skin]");

const studioSkinName =
    document.getElementById("studioSkinName");

studioSkinButtons.forEach((button) => {
    button.addEventListener("click", () => {

        studioSkinButtons.forEach((option) => {
            option.classList.remove("active");
        });

        button.classList.add("active");

        document.documentElement.style.setProperty(
            "--studio-skin-color",
            button.dataset.studioSkin
        );

        if (studioSkinName) {
            studioSkinName.textContent =
                button.dataset.studioSkinName;
        }

    });
});


/* =========================
   HAIR STYLE
========================= */

const studioHairButtons =
    document.querySelectorAll("[data-studio-hair]");

const studioHairStyles = {
    classic: {
        height: "124px",
        transform: "scale(1)",
        name: "Classique"
    },

    short: {
        height: "91px",
        transform: "scaleX(0.96)",
        name: "Court"
    },

    wave: {
        height: "132px",
        transform: "rotate(-4deg) scaleX(1.04)",
        name: "Ondulé"
    },

    volume: {
        height: "145px",
        transform: "scale(1.08)",
        name: "Volume"
    }
};

studioHairButtons.forEach((button) => {
    button.addEventListener("click", () => {

        studioHairButtons.forEach((option) => {
            option.classList.remove("active");
        });

        button.classList.add("active");

        const selectedHair =
            studioHairStyles[button.dataset.studioHair];

        if (studioAvatarHair) {
            studioAvatarHair.style.height =
                selectedHair.height;

            studioAvatarHair.style.transform =
                selectedHair.transform;
        }

        const summaryHair =
            document.getElementById("summaryHair");

        if (summaryHair) {
            summaryHair.textContent =
                selectedHair.name;
        }

    });
});


/* =========================
   HAIR COLOR
========================= */

const studioHairColorButtons =
    document.querySelectorAll("[data-studio-hair-color]");

const studioHairName =
    document.getElementById("studioHairName");

studioHairColorButtons.forEach((button) => {
    button.addEventListener("click", () => {

        studioHairColorButtons.forEach((option) => {
            option.classList.remove("active");
        });

        button.classList.add("active");

        document.documentElement.style.setProperty(
            "--studio-hair-color",
            button.dataset.studioHairColor
        );

        if (studioHairName) {
            studioHairName.textContent =
                button.dataset.studioHairName;
        }

    });
});


/* =========================
   EYE STYLE
========================= */

const studioEyeButtons =
    document.querySelectorAll("[data-studio-eye]");

const studioEyeStyles = {
    natural: {
        width: "30px",
        height: "18px",
        radius: "50%",
        name: "Naturel"
    },

    large: {
        width: "34px",
        height: "21px",
        radius: "50%",
        name: "Large"
    },

    soft: {
        width: "31px",
        height: "15px",
        radius: "55%",
        name: "Doux"
    },

    sharp: {
        width: "32px",
        height: "16px",
        radius: "70% 25% 70% 25%",
        name: "Intense"
    }
};

studioEyeButtons.forEach((button) => {
    button.addEventListener("click", () => {

        studioEyeButtons.forEach((option) => {
            option.classList.remove("active");
        });

        button.classList.add("active");

        const selectedEye =
            studioEyeStyles[button.dataset.studioEye];

        studioAvatarEyes.forEach((eye) => {
            eye.style.width =
                selectedEye.width;

            eye.style.height =
                selectedEye.height;

            eye.style.borderRadius =
                selectedEye.radius;
        });

        const summaryEyes =
            document.getElementById("summaryEyes");

        if (summaryEyes) {
            summaryEyes.textContent =
                selectedEye.name;
        }

    });
});


/* =========================
   EYE COLOR
========================= */

const studioEyeColorButtons =
    document.querySelectorAll("[data-studio-eye-color]");

const studioEyeName =
    document.getElementById("studioEyeName");

studioEyeColorButtons.forEach((button) => {
    button.addEventListener("click", () => {

        studioEyeColorButtons.forEach((option) => {
            option.classList.remove("active");
        });

        button.classList.add("active");

        document.documentElement.style.setProperty(
            "--studio-eye-color",
            button.dataset.studioEyeColor
        );

        if (studioEyeName) {
            studioEyeName.textContent =
                button.dataset.studioEyeName;
        }

    });
});


/* =========================
   OUTFIT OPTIONS
========================= */

const studioOutfitButtons =
    document.querySelectorAll(".gold-outfit-option");

studioOutfitButtons.forEach((button) => {
    button.addEventListener("click", () => {

        studioOutfitButtons.forEach((option) => {
            option.classList.remove("active");
        });

        button.classList.add("active");

        document.documentElement.style.setProperty(
            "--studio-outfit-primary",
            button.dataset.studioOutfit
        );

        document.documentElement.style.setProperty(
            "--studio-outfit-secondary",
            button.dataset.studioOutfitSecondary
        );

        const summaryOutfit =
            document.getElementById("summaryOutfit");

        if (summaryOutfit) {
            summaryOutfit.textContent =
                button.dataset.outfitName;
        }

    });
});


/* =========================
   BACKGROUND OPTIONS
========================= */

const studioBackgroundButtons =
    document.querySelectorAll("[data-preview-background]");

studioBackgroundButtons.forEach((button) => {
    button.addEventListener("click", () => {

        studioBackgroundButtons.forEach((option) => {
            option.classList.remove("active");
        });

        button.classList.add("active");

        if (!studioPreviewStage) {
            return;
        }

        studioPreviewStage.classList.remove(
            "preview-background-gold",
            "preview-background-pink",
            "preview-background-light"
        );

        const selectedBackground =
            button.dataset.previewBackground;

        if (selectedBackground !== "dark") {
            studioPreviewStage.classList.add(
                `preview-background-${selectedBackground}`
            );
        }

    });
});


/* =========================
   BOOTSTRAP TAB NAVIGATION
========================= */

const goldTabButtons = Array.from(
    document.querySelectorAll(
        "#goldEditorTabs [data-bs-toggle='tab']"
    )
);

const goldPreviousTab =
    document.getElementById("goldPreviousTab");

const goldNextTab =
    document.getElementById("goldNextTab");

const goldProgressBar =
    document.getElementById("goldProgressBar");

const goldStudioProgress =
    document.getElementById("goldStudioProgress");

let currentGoldTabIndex = 0;


function updateGoldStudioProgress(index) {
    currentGoldTabIndex = index;

    const percentage =
        Math.round(
            ((index + 1) / goldTabButtons.length) * 100
        );

    if (goldProgressBar) {
        goldProgressBar.style.width =
            `${percentage}%`;

        goldProgressBar.parentElement.setAttribute(
            "aria-valuenow",
            String(percentage)
        );
    }

    if (goldStudioProgress) {
        goldStudioProgress.textContent =
            `${percentage}%`;
    }

    if (goldPreviousTab) {
        goldPreviousTab.disabled =
            index === 0;
    }

    if (goldNextTab) {
        goldNextTab.innerHTML =
            index === goldTabButtons.length - 1
                ? 'Finaliser <i class="bi bi-check2"></i>'
                : 'Continuer <i class="bi bi-arrow-right"></i>';
    }
}


goldTabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener(
        "shown.bs.tab",
        () => {
            updateGoldStudioProgress(index);
        }
    );
});


goldNextTab?.addEventListener("click", () => {

    if (
        currentGoldTabIndex <
        goldTabButtons.length - 1
    ) {
        const nextTab =
            goldTabButtons[currentGoldTabIndex + 1];

        bootstrap.Tab.getOrCreateInstance(
            nextTab
        ).show();
    } else {
        goldNextTab.innerHTML =
            'Avatar prêt <i class="bi bi-check2"></i>';
    }

});


goldPreviousTab?.addEventListener("click", () => {

    if (currentGoldTabIndex > 0) {
        const previousTab =
            goldTabButtons[currentGoldTabIndex - 1];

        bootstrap.Tab.getOrCreateInstance(
            previousTab
        ).show();
    }

});


/* =========================
   AVATAR ZOOM
========================= */

const goldZoomIn =
    document.getElementById("goldZoomIn");

const goldZoomOut =
    document.getElementById("goldZoomOut");

const goldZoomValue =
    document.getElementById("goldZoomValue");

let goldAvatarZoom = 100;


function updateGoldAvatarZoom() {
    if (!studioFullAvatar) {
        return;
    }

    studioFullAvatar.style.transform =
        `scale(${goldAvatarZoom / 100})`;

    if (goldZoomValue) {
        goldZoomValue.textContent =
            `${goldAvatarZoom}%`;
    }
}


goldZoomIn?.addEventListener("click", () => {
    goldAvatarZoom =
        Math.min(120, goldAvatarZoom + 10);

    updateGoldAvatarZoom();
});


goldZoomOut?.addEventListener("click", () => {
    goldAvatarZoom =
        Math.max(70, goldAvatarZoom - 10);

    updateGoldAvatarZoom();
});


/* =========================
   RESET GOLD STUDIO
========================= */

const goldStudioResetButton =
    document.getElementById("goldResetButton");

goldStudioResetButton?.addEventListener("click", () => {

    document.documentElement.style.setProperty(
        "--studio-skin-color",
        "#f3b8a4"
    );

    document.documentElement.style.setProperty(
        "--studio-hair-color",
        "#19191d"
    );

    document.documentElement.style.setProperty(
        "--studio-eye-color",
        "#6d4a2f"
    );

    document.documentElement.style.setProperty(
        "--studio-outfit-primary",
        "#ff007f"
    );

    document.documentElement.style.setProperty(
        "--studio-outfit-secondary",
        "#9f004f"
    );

    if (studioAvatarFace) {
        studioAvatarFace.style.borderRadius =
            studioFaceShapes.oval.radius;
    }

    if (studioAvatarHair) {
        studioAvatarHair.removeAttribute("style");
    }

    studioAvatarEyes.forEach((eye) => {
        eye.removeAttribute("style");
    });

    goldAvatarZoom = 100;
    updateGoldAvatarZoom();

    document.getElementById("summaryFace").textContent =
        "Ovale";

    document.getElementById("summaryHair").textContent =
        "Classique";

    document.getElementById("summaryEyes").textContent =
        "Naturel";

    document.getElementById("summaryOutfit").textContent =
        "Signature Gold";

    bootstrap.Tab.getOrCreateInstance(
        goldTabButtons[0]
    ).show();

});


/* =========================
   FINALIZE BUTTON
========================= */

const generateGoldAvatar =
    document.getElementById("generateGoldAvatar");

generateGoldAvatar?.addEventListener("click", () => {

    generateGoldAvatar.innerHTML = `
        <span>
            <i class="bi bi-check2-circle"></i>
            Avatar Gold prêt
        </span>

        <i class="bi bi-check2"></i>
    `;

    generateGoldAvatar.style.background =
        "linear-gradient(135deg, #38d994, #14794f)";

});


updateGoldStudioProgress(0);
updateGoldAvatarZoom();
/* =========================
   FINAL PAGE INTERACTIONS
========================= */


/* =========================
   SCROLL PROGRESS
========================= */

const goldScrollProgressBar =
    document.getElementById("goldScrollProgressBar");

const goldBackToTop =
    document.getElementById("goldBackToTop");


function updateGoldPageScroll() {

    const scrollTop =
        window.scrollY;

    const scrollableHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const scrollPercentage =
        scrollableHeight > 0
            ? (scrollTop / scrollableHeight) * 100
            : 0;

    if (goldScrollProgressBar) {
        goldScrollProgressBar.style.width =
            `${scrollPercentage}%`;
    }

    if (goldBackToTop) {
        goldBackToTop.classList.toggle(
            "visible",
            scrollTop > 550
        );
    }

}


window.addEventListener(
    "scroll",
    updateGoldPageScroll,
    { passive: true }
);

updateGoldPageScroll();


goldBackToTop?.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================
   REVEAL ON SCROLL
========================= */

const goldRevealItems =
    document.querySelectorAll(".reveal-item");


if ("IntersectionObserver" in window) {

    const goldRevealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        "revealed"
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -45px 0px"
            }
        );


    goldRevealItems.forEach((item, index) => {

        item.style.transitionDelay =
            `${Math.min(index % 4, 3) * 80}ms`;

        goldRevealObserver.observe(item);

    });

} else {

    goldRevealItems.forEach((item) => {
        item.classList.add("revealed");
    });

}


/* =========================
   ANIMATED COUNTERS
========================= */

const goldCounterElements =
    document.querySelectorAll(".animated-counter");


function animateGoldCounter(element) {

    const targetValue =
        Number(element.dataset.counter);

    const suffix =
        element.dataset.counterSuffix || "";

    const duration = 1400;

    const startTime =
        performance.now();


    function updateCounter(currentTime) {

        const elapsedTime =
            currentTime - startTime;

        const progress =
            Math.min(elapsedTime / duration, 1);

        const easedProgress =
            1 - Math.pow(1 - progress, 3);

        const currentValue =
            Math.floor(targetValue * easedProgress);

        element.textContent =
            `${currentValue}${suffix}`;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent =
                `${targetValue}${suffix}`;
        }

    }

    requestAnimationFrame(updateCounter);

}


if ("IntersectionObserver" in window) {

    const goldCounterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    animateGoldCounter(entry.target);

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.5
            }
        );


    goldCounterElements.forEach((counter) => {
        goldCounterObserver.observe(counter);
    });

} else {

    goldCounterElements.forEach(
        animateGoldCounter
    );

}


/* =========================
   GALLERY FILTER
========================= */

const galleryFilterButtons =
    document.querySelectorAll(
        "[data-gallery-filter]"
    );

const galleryCardColumns =
    document.querySelectorAll(
        "[data-gallery-category]"
    );


galleryFilterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        galleryFilterButtons.forEach(
            (filterButton) => {

                filterButton.classList.remove(
                    "active"
                );

            }
        );

        button.classList.add("active");

        const selectedCategory =
            button.dataset.galleryFilter;


        galleryCardColumns.forEach((column) => {

            const cardCategory =
                column.dataset.galleryCategory;

            const shouldDisplay =
                selectedCategory === "all" ||
                selectedCategory === cardCategory;

            column.classList.toggle(
                "gallery-hidden",
                !shouldDisplay
            );

        });

    });

});


/* =========================
   GALLERY FAVORITES
========================= */

const galleryFavoriteButtons =
    document.querySelectorAll(
        ".gallery-favorite-button"
    );


galleryFavoriteButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const isFavorite =
            button.classList.toggle("active");

        const icon =
            button.querySelector("i");

        icon.className =
            isFavorite
                ? "bi bi-heart-fill"
                : "bi bi-heart";

        button.setAttribute(
            "aria-label",
            isFavorite
                ? "Retirer des favoris"
                : "Ajouter aux favoris"
        );

    });

});


/* =========================
   WORKFLOW ANIMATION
========================= */

const goldWorkflowSection =
    document.querySelector(
        ".gold-workflow-section"
    );

const workflowProgress =
    document.getElementById(
        "workflowProgress"
    );

const workflowSteps =
    document.querySelectorAll(
        ".workflow-step"
    );


if (
    goldWorkflowSection &&
    "IntersectionObserver" in window
) {

    const workflowObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach((entry) => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    if (workflowProgress) {
                        workflowProgress.style.width =
                            "100%";
                    }

                    workflowSteps.forEach(
                        (step, index) => {

                            window.setTimeout(() => {
                                step.classList.add(
                                    "active"
                                );
                            }, index * 180);

                        }
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.25
            }
        );

    workflowObserver.observe(
        goldWorkflowSection
    );

}


/* =========================
   BILLING SWITCH
========================= */

const goldBillingSwitch =
    document.getElementById("billingSwitch");

const goldPriceElements =
    document.querySelectorAll(
        "[data-monthly-price]"
    );


function updateGoldPrices() {

    const isYearly =
        Boolean(goldBillingSwitch?.checked);

    goldPriceElements.forEach((priceElement) => {

        const monthlyPrice =
            priceElement.dataset.monthlyPrice;

        const yearlyPrice =
            priceElement.dataset.yearlyPrice;

        priceElement.textContent =
            `${isYearly ? yearlyPrice : monthlyPrice}€`;

    });

}


goldBillingSwitch?.addEventListener(
    "change",
    updateGoldPrices
);

updateGoldPrices();


/* =========================
   NEWSLETTER
========================= */

const goldNewsletterForm =
    document.getElementById(
        "goldNewsletterForm"
    );

const goldNewsletterEmail =
    document.getElementById(
        "goldNewsletterEmail"
    );

const newsletterMessage =
    document.getElementById(
        "newsletterMessage"
    );


goldNewsletterForm?.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();

        if (
            !goldNewsletterEmail ||
            !goldNewsletterEmail.checkValidity()
        ) {
            goldNewsletterEmail?.reportValidity();

            return;
        }

        newsletterMessage.textContent =
            "Merci ! Votre inscription a bien été enregistrée.";

        newsletterMessage.style.color =
            "#78dfad";

        goldNewsletterEmail.value = "";

    }
);


/* =========================
   CURRENT YEAR
========================= */

const goldCurrentYear =
    document.getElementById("goldCurrentYear");

if (goldCurrentYear) {
    goldCurrentYear.textContent =
        new Date().getFullYear();
}


/* =========================
   BOOTSTRAP MOBILE NAV CLOSE
========================= */

const goldNavigationElement =
    document.getElementById("goldNavigation");

const goldNavigationLinks =
    document.querySelectorAll(
        "#goldNavigation .nav-link"
    );


goldNavigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (
            window.innerWidth >= 992 ||
            !goldNavigationElement
        ) {
            return;
        }

        const navigationCollapse =
            bootstrap.Collapse.getOrCreateInstance(
                goldNavigationElement,
                {
                    toggle: false
                }
            );

        navigationCollapse.hide();

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const goldMainSections =
    document.querySelectorAll(
        "main section[id]"
    );

const goldMainNavigationLinks =
    document.querySelectorAll(
        ".gold-header .nav-link"
    );


function updateGoldNavigation() {

    let currentSectionId =
        "accueil";


    goldMainSections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {
            currentSectionId = section.id;
        }

    });


    goldMainNavigationLinks.forEach((link) => {

        const href =
            link.getAttribute("href");

        if (
            !href ||
            !href.startsWith("#")
        ) {
            return;
        }

        link.classList.toggle(
            "active",
            href === `#${currentSectionId}`
        );

    });

}


window.addEventListener(
    "scroll",
    updateGoldNavigation,
    { passive: true }
);

updateGoldNavigation();


/* =========================
   RIPPLE EFFECT
========================= */

const goldRippleButtons =
    document.querySelectorAll(
        ".ripple-button"
    );


goldRippleButtons.forEach((button) => {

    button.addEventListener("click", (event) => {

        const buttonRectangle =
            button.getBoundingClientRect();

        const rippleSize =
            Math.max(
                buttonRectangle.width,
                buttonRectangle.height
            );

        const ripple =
            document.createElement("span");

        ripple.className =
            "button-ripple";

        ripple.style.width =
            `${rippleSize}px`;

        ripple.style.height =
            `${rippleSize}px`;

        ripple.style.left =
            `${
                event.clientX -
                buttonRectangle.left -
                rippleSize / 2
            }px`;

        ripple.style.top =
            `${
                event.clientY -
                buttonRectangle.top -
                rippleSize / 2
            }px`;

        button.appendChild(ripple);

        window.setTimeout(() => {
            ripple.remove();
        }, 650);

    });

});


/* =========================
   LIGHT CARD TILT
========================= */

const goldTiltCards =
    document.querySelectorAll(
        ".gold-feature-card, .gold-gallery-card, .gold-price-card"
    );


goldTiltCards.forEach((card) => {

    card.addEventListener(
        "mousemove",
        (event) => {

            if (window.innerWidth < 992) {
                return;
            }

            const rectangle =
                card.getBoundingClientRect();

            const xPosition =
                event.clientX - rectangle.left;

            const yPosition =
                event.clientY - rectangle.top;

            const rotateY =
                ((xPosition / rectangle.width) - 0.5) * 3;

            const rotateX =
                ((yPosition / rectangle.height) - 0.5) * -3;

            card.style.transform = `
                perspective(900px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-5px)
            `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});