var $, moment;
typeof window != "undefined" &&
    (window.Dinosaur = {
        enableLogs: false,
        useRatingsCache: false,
        queryCache: {},
        widgetsAuto: true,
        uploadFiles: [],
        zIndex: 20000000,
        MAIN_COLOR: "#FF9900",
        countryCodes: [
            "ac",
            "ad",
            "ae",
            "af",
            "ag",
            "ai",
            "al",
            "am",
            "ao",
            "aq",
            "ar",
            "as",
            "at",
            "au",
            "aw",
            "ax",
            "az",
            "ba",
            "bb",
            "bd",
            "be",
            "bf",
            "bg",
            "bh",
            "bi",
            "bj",
            "bl",
            "bm",
            "bn",
            "bo",
            "bq",
            "br",
            "bs",
            "bt",
            "bv",
            "bw",
            "by",
            "bz",
            "ca",
            "cc",
            "cd",
            "cefta",
            "cf",
            "cg",
            "ch",
            "ci",
            "ck",
            "cl",
            "cm",
            "cn",
            "co",
            "cp",
            "cr",
            "cu",
            "cv",
            "cw",
            "cx",
            "cy",
            "cz",
            "de",
            "dg",
            "dj",
            "dk",
            "dm",
            "do",
            "dz",
            "ea",
            "ec",
            "ee",
            "eg",
            "eh",
            "er",
            "es-ct",
            "es-ga",
            "es-pv",
            "es",
            "et",
            "eu",
            "fi",
            "fj",
            "fk",
            "fm",
            "fo",
            "fr",
            "ga",
            "gb-eng",
            "gb-nir",
            "gb-sct",
            "gb-wls",
            "gb",
            "gd",
            "ge",
            "gf",
            "gg",
            "gh",
            "gi",
            "gl",
            "gm",
            "gn",
            "gp",
            "gq",
            "gr",
            "gs",
            "gt",
            "gu",
            "gw",
            "gy",
            "hk",
            "hm",
            "hn",
            "hr",
            "ht",
            "hu",
            "ic",
            "id",
            "ie",
            "il",
            "im",
            "in",
            "io",
            "iq",
            "ir",
            "is",
            "it",
            "je",
            "jm",
            "jo",
            "jp",
            "ke",
            "kg",
            "kh",
            "ki",
            "km",
            "kn",
            "kp",
            "kr",
            "kw",
            "ky",
            "kz",
            "la",
            "lb",
            "lc",
            "li",
            "lk",
            "lr",
            "ls",
            "lt",
            "lu",
            "lv",
            "ly",
            "ma",
            "mc",
            "md",
            "me",
            "mf",
            "mg",
            "mh",
            "mk",
            "ml",
            "mm",
            "mn",
            "mo",
            "mp",
            "mq",
            "mr",
            "ms",
            "mt",
            "mu",
            "mv",
            "mw",
            "mx",
            "my",
            "mz",
            "na",
            "nc",
            "ne",
            "nf",
            "ng",
            "ni",
            "nl",
            "no",
            "np",
            "nr",
            "nu",
            "nz",
            "om",
            "pa",
            "pe",
            "pf",
            "pg",
            "ph",
            "pk",
            "pl",
            "pm",
            "pn",
            "pr",
            "ps",
            "pt",
            "pw",
            "py",
            "qa",
            "re",
            "ro",
            "rs",
            "ru",
            "rw",
            "sa",
            "sb",
            "sc",
            "sd",
            "se",
            "sg",
            "sh",
            "si",
            "sj",
            "sk",
            "sl",
            "sm",
            "sn",
            "so",
            "sr",
            "ss",
            "st",
            "sv",
            "sx",
            "sy",
            "sz",
            "ta",
            "tc",
            "td",
            "tf",
            "tg",
            "th",
            "tj",
            "tk",
            "tl",
            "tm",
            "tn",
            "to",
            "tr",
            "tt",
            "tv",
            "tw",
            "tz",
            "ua",
            "ug",
            "um",
            "un",
            "us",
            "uy",
            "uz",
            "va",
            "vc",
            "ve",
            "vg",
            "vi",
            "vn",
            "vu",
            "wf",
            "ws",
            "xk",
            "xx",
            "ye",
            "yt",
            "za",
            "zm",
            "zw",
        ],
        CARD_SPACING: 20,
        CARD_MIN_WIDTH: 250,
        CARD_MAX_WIDTH: 400,

        mediaError: (media) => {
            media.onerror = null;
            media.setAttribute("src_not_found", media.src);
            media.src = "";
            return true;
        },

        showWriteReviewForm: (force) => {
            if (!force && !Dinosaur.config.showReviewButton) return;
            !$(".ui-vbexmhlq").length && Dinosaur.buildReviewForm();
            Dinosaur.showBackdropBox(".ui-vbexmhlq");
        },

        hideWriteReviewForm: () => {
            Dinosaur.hideBackdropBox(".ui-vbexmhlq");
            $(".ui-l057676x").css({ "pointer-events": "", opacity: "" });
            $(".ui-n4xsrqxt").removeClass("ui-n4xsrqxt");
            $(".ui-coymohez").remove();
            $(".ui-ehvjvjix").html(Dinosaur.config.textSubmitReview);
            Dinosaur.resetReviewRating();
        },

        resetReviewRating: () => {
            try {
                $("#ui-lu7bp9o7").change();
            } catch { }
        },

        filterReviews: ({ filter, review, rating }) => {
            let filter2 = review;
            !filter && rating && (filter = rating);
            let toggle = false;
            if (filter < 0) {
                filter = -filter;
                toggle = true;
            }
            if (Dinosaur.data.filter == filter && Dinosaur.data.filter2 == filter2) {
                if (toggle) filter = "all";
                else return;
            }
            if (Dinosaur.data.filter != filter || Dinosaur.data.filter2 != filter2) {
                $(`.ui-zs7en5hj[filter="${toggle ? "-" : ""}${Dinosaur.data.filter}"]`).removeAttr("active");
                $(`.ui-zs7en5hj[filter="${toggle ? "-" : ""}${filter}"]`).attr("active", "");
                $(`.ui-8ks86m1u[filter="${toggle ? "-" : ""}${Dinosaur.data.filter}"]`).removeAttr("active");
                $(`.ui-8ks86m1u[filter="${toggle ? "-" : ""}${filter}"]`).attr("active", "");
                filter && (Dinosaur.data.filter = filter);
                filter2 && (Dinosaur.data.filter2 = filter2);
                Dinosaur.loadProductReviews({
                    page: 1,
                    requireCount: true,
                    featured: Dinosaur.isAllReviewsPage,
                });
            }
        },

        sortReviews: async (sort) => {
            if (Dinosaur.data.sort == sort) return;
            Dinosaur.data.sort = sort;
            Dinosaur.loadProductReviews({ page: 1, featured: Dinosaur.isAllReviewsPage });
        },

        buildGrid: (allrvs) => {
            if (Dinosaur.config.widgetLayout != "grid" || Dinosaur.preventCardsArrange)
                return;
            if (Dinosaur[`_timerBuildGrid${allrvs}`]) {
                clearTimeout(Dinosaur[`_timerBuildGrid${allrvs}`]);
                delete Dinosaur[`_timerBuildGrid${allrvs}`];
            }
            Dinosaur[`_timerBuildGrid${allrvs}`] = setTimeout(
                async () => {
                    Dinosaur.isMobile && (Dinosaur.CARD_SPACING = 10);
                    const boxClass = allrvs ? ".ui-5jhia8mq" : ".ui-4btxmveg";
                    const W = $(boxClass).width(),
                        maxCols = 8,
                        minCols = 1;
                    if (!W) return;

                    let cols = minCols;
                    if (W / maxCols > Dinosaur.CARD_MAX_WIDTH) cols = maxCols;
                    else
                        for (var i = maxCols; i >= minCols; i--) {
                            const c = W / i;
                            if (c >= Dinosaur.CARD_MIN_WIDTH) {
                                cols = i;
                                break;
                            }
                        }
                    const baseWidth = (W - (cols - 1) * Dinosaur.CARD_SPACING) / cols;
                    $(boxClass + " .ui-soy2qxsg").css({
                        width: baseWidth + "px",
                    });
                    const makeGrid = () => {
                        const colsHeight = Array.apply(null, Array(cols)).map(function () {
                            return 0;
                        });
                        const getLowestCol = function () {
                            let col = 0,
                                min = colsHeight[col];
                            colsHeight.forEach((h, i) => {
                                h < min && ((col = i), (min = h));
                            });
                            return col;
                        };
                        $(boxClass + " .ui-soy2qxsg").each(function () {
                            const col = getLowestCol();
                            $(this).css({
                                top: colsHeight[col],
                                left: col == 0 ? 0 : (baseWidth + Dinosaur.CARD_SPACING) * col,
                            });
                            colsHeight[col] += $(this).height() + Dinosaur.CARD_SPACING;
                        });
                        const height = Math.max(...colsHeight);
                        (height > 0 || !allrvs) && $(boxClass).height(height);
                    };
                    makeGrid();
                    const images = document.querySelectorAll(boxClass + " img");
                    if (images?.length > 0) {
                        await Promise.all(
                            Array.from(images)
                                .filter((img) => !img.complete)
                                .map(
                                    (img) =>
                                        new Promise((resolve) => {
                                            img.onload = img.onerror = resolve;
                                        })
                                )
                        );
                        makeGrid();
                    }
                    const videos = document.querySelectorAll(boxClass + " video");
                    if (videos?.length > 0) {
                        await Promise.all(
                            Array.from(videos).map(
                                (video) =>
                                    new Promise((resolve) => {
                                        video.ondurationchange = video.onerror = resolve;
                                    })
                            )
                        );
                        makeGrid();
                    }
                },
                Dinosaur.isUIPreview ? 0 : 500
            );
        },

        doFetch: async ({
            url,
            headers,
            data,
            readStream = true,
            method = "POST",
            callback,
            cached,
        }) => {
            const fetchOptions = {
                method,
                headers: {
                    ...headers,
                    "Content-Type": "application/json",
                    "query-cache-type": "none",
                },
            };
            let cacheKey, response;
            data && (fetchOptions.body = JSON.stringify(data));
            if (cached) {
                cacheKey = url + (fetchOptions.body ?? "");
                response = Dinosaur.queryCache[cacheKey];
                if (cached == "getkey") return cacheKey;
            }
            if (response == undefined) {
                response = await fetch(
                    url.startsWith("http")
                        ? url
                        : (Dinosaur.config.shopURL?.length ? Dinosaur.config.shopURL : "") + url,
                    fetchOptions
                );
                if (readStream) {
                    response = await response.json();
                }
                if (cached && cacheKey) {
                    Dinosaur.queryCache[cacheKey] = response;
                }
            } else {
                Dinosaur.log(`Read data from cache of key: "${cacheKey}"`);
            }
            callback?.(response);
            return response;
        },

        stopAllVideo: () => {
            $("#ui-4m0xgc2u video").each(function () {
                this.pause();
                this.currentTime = 0;
            });
        },

        showImage: (p, isListMedia) => {
            // const reviewId = $(p).attr("reviewId");
            // Dinosaur.reviewsWithMedia[reviewId] = Dinosaur.reviews.find(r => r.id == reviewId);
            if (!Dinosaur.swiperMedia) return;
            if (Dinosaur.isUIPreview) return;
            const box = $(p).closest(
                ".ui-yck7o6wt, .ui-1xpi0b3y, .ui-hl6w2maa, .ui-ojqgrsai"
            )[0];
            if (box && Dinosaur.swiperMediaBox != box) {
                Dinosaur.swiperMediaBox = box;
                Dinosaur.swiperMedia.removeAllSlides();
                let i = -1;
                $(box)
                    .find("img, video")
                    .each(function (index, element) {
                        const src = $(this).attr("src") ?? $(this).attr("data-src");
                        const reviewId = $(this).attr("reviewId");
                        if (src == p.getAttribute("src")) i = index;
                        Dinosaur.swiperMedia.appendSlide(
                            `<div class="swiper-slide"><div class="swiper-zoom-container">${Dinosaur.buildMediaTag(
                                { src, reviewId }
                            )}</div></div>`
                        );
                    });
            }
            const media = $(p).closest(".ui-jah04t9d")[0];
            if (media) {
                const index = [...(isListMedia && Dinosaur.config.albumType == "streamlined"
                    ? $(media).closest(".ui-ojqgrsai").find(".ui-jah04t9d")
                    : media.parentElement.children)].indexOf(media);
                Dinosaur.swiperMedia.slideTo(index, 0, false);
            }
            Dinosaur.showBackdropBox("#ui-4m0xgc2u");
            $(".ui-52vpii9y").removeAttr("small");
            setTimeout(() => {
                $(".swiper-slide-active video")[0]?.play();
            }, 500);
        },

        translateApi: async (from, s) => {
            if (from == Dinosaur.locale) return;
            let q = encodeURIComponent(s);
            if (q.length > 16312) q = q.substring(0, 16312);
            const res =
                q &&
                (await fetch(
                    `https://translate.googleapis.com/translate_a/single?client=gtx&format=html&sl=${from}&tl=${Dinosaur.locale}&dt=t&q=${q}`
                ));
            const ts = res && (await res.json());
            return ts?.[0];
        },

        applyTranslation: (ts, rmap, textObjs) => {
            let s = "",
                reviewId;
            ts?.map((tx) => {
                const t = tx[0] ?? tx;
                if (t.startsWith("%%") || t.startsWith("٪٪")) {
                    reviewId = Number(t.substring(2));
                    if (reviewId > 0 && s) {
                        $(
                            `.ui-fclc03pj[reviewid="${reviewId}"] .ui-zjf7bzn2`
                        ).html(Dinosaur.correctReviewTitle(s));
                        rmap[reviewId] && (rmap[reviewId].title = s);
                    }
                    s = "";
                } else if (t.startsWith("@@") || !isNaN(t)) {
                    reviewId = isNaN(t) ? Number(t.substring(2)) : t;
                    if (reviewId > 0 && s) {
                        $(
                            `.ui-fclc03pj[reviewid="${reviewId}"] .ui-ku6zl7yi`
                        ).html(s == "NULL" ? "" : s);
                        rmap[reviewId] && (rmap[reviewId].body = s);
                    }
                    s = "";
                } else if (t.startsWith("^^")) {
                    const index = Number(t.substring(2));
                    s &&
                        index >= 0 &&
                        Dinosaur.translateKeys?.[index] &&
                        (Dinosaur.config[Dinosaur.translateKeys[index]] = s);
                    s = "";
                } else if (t.startsWith("~~")) {
                    const index = Number(t.substring(2));
                    s && index >= 0 && textObjs?.[index] && !(Dinosaur.config.preventTranslate && $(textObjs?.[index]).parent(Dinosaur.config.preventTranslate).length > 0) && $(textObjs[index]).html(s);
                    s = "";
                } else t && (s += (s ? " " : "") + t);
            });
        },

        translateEachReview: async (reviews) => {
            for (const r of reviews) {
                if (!r.translated) {
                    r.translated = true;
                    const q = `<x><y>${r.title}</y>%%${r.id}<z>${r.body}</z></x>@@${r.id}`;
                    const ts = await Dinosaur.translateApi("auto", q);
                    Dinosaur.applyTranslation(ts, { [r.id]: r });
                }
            }
        },

        translateA: async (reviews) => {
            let targetLanguageCode = Dinosaur.locale,
                qText = [],
                qIndexes = [],
                textObjs;
            if (Dinosaur.translateTexts) {
                if (!Dinosaur.translateKeys) {
                    Dinosaur.translateKeys = [
                        "textReadMore",
                        "textPrevPage",
                        "textNextPage",
                        "textShowMore",
                        "textVerified",
                        "textShopReply",
                        "textLikeReview",
                        "textWidgetTitle",
                        "textValidationContent",
                        "textValidationName",
                        "textValidationEmail",
                        "textSendingReview",
                        "textUploadMediaFailed",
                        "textReviewSuccess",
                        "textReviewFailed",
                        "textValidationLimitFiles",
                        "textValidationLimitVideo",
                        "textRating",
                        "textRating1",
                        "textRating2",
                        "textRating3",
                        "textRating4",
                        "textRating5",
                        "textReviewButton",
                        "textReviewRating",
                        "textReviewTitle",
                        "textReviewContent",
                        "textReviewerName",
                        "textReviewerEmail",
                        "textAddMedia",
                        "textSubmitReview",
                        "textSidebar",
                    ];
                    Dinosaur.translateKeys.map((key, index) => {
                        qText.push(Dinosaur.lang.English[key]);
                        qIndexes.push(index);
                    });
                }
                textObjs = $("*[ui-qv6rlqls]");
                textObjs.each((index, el) => {
                    $(el).removeAttr("ui-qv6rlqls");
                    qText.push($(el).text());
                    qIndexes.push(el);
                });
            }
            reviews.map((r) => {
                if (!r.translated) {
                    r.translated = true;
                    if (r.title) {
                        qText.push(r.title);
                        qIndexes.push(["title", r]);
                    }
                    if (r.body) {
                        qText.push(r.body);
                        qIndexes.push(["body", r]);
                    }
                }
            });
            const ts =
                qText.length &&
                (await Dinosaur.doFetch({
                    url: "",
                    data: {
                        contents: qText,
                        targetLanguageCode,
                    },
                }));
            ts?.translations?.map(({ translatedText: s }, index) => {
                const o = qIndexes[index],
                    t = typeof o;
                if (t == "number") {
                    Dinosaur.translateKeys?.[o] &&
                        (Dinosaur.config[Dinosaur.translateKeys[o]] = s);
                } else if (t == "object") {
                    if (Array.isArray(o) && o.length == 2) {
                        const review = o[1];
                        if (o[0] == "title") {
                            $(
                                `.ui-fclc03pj[reviewid="${review.id}"] .ui-zjf7bzn2`
                            ).html(Dinosaur.correctReviewTitle(s));
                            review.title = screenLeft;
                        } else if (o[0] == "body") {
                            $(
                                `.ui-fclc03pj[reviewid="${review.id}"] .ui-ku6zl7yi`
                            ).html(s);
                            review.body = s;
                        }
                    } else if (o.innerHTML) {
                        o.innerHTML = s;
                    }
                }
            });
        },

        translateG: async (reviews) => {
            let qText = "",
                textObjs;
            if (Dinosaur.translateTexts) {
                if (!Dinosaur.translateKeys) {
                    Dinosaur.translateKeys = [
                        "textReadMore",
                        "textPrevPage",
                        "textNextPage",
                        "textShowMore",
                        "textVerified",
                        "textShopReply",
                        "textLikeReview",
                        "textWidgetTitle",
                        "textValidationContent",
                        "textValidationName",
                        "textValidationEmail",
                        "textSendingReview",
                        "textUploadMediaFailed",
                        "textReviewSuccess",
                        "textReviewFailed",
                        "textValidationLimitFiles",
                        "textValidationLimitVideo",
                        "textRating",
                        "textRating1",
                        "textRating2",
                        "textRating3",
                        "textRating4",
                        "textRating5",
                        "textReviewButton",
                        "textReviewRating",
                        "textReviewTitle",
                        "textReviewContent",
                        "textReviewerName",
                        "textReviewerEmail",
                        "textAddMedia",
                        "textSubmitReview",
                        "textSidebar",
                    ];
                    Dinosaur.translateKeys.map((key, index) => {
                        qText += `<x>${Dinosaur.lang.English[key]}</x>^^${index}`;
                    });
                }
                textObjs = $("*[ui-qv6rlqls]");
                textObjs.each((index, el) => {
                    qText += `<x>${$(el).html()}</x>~~${index}`;
                    $(el).removeAttr("ui-qv6rlqls");
                });
            }
            const rmap = {};
            let ts = (!!qText && (await Dinosaur.translateApi("en", qText))) || [];
            if (Dinosaur.config.translateEachReview) Dinosaur.translateEachReview(reviews);
            else {
                let qRvs = "";
                reviews.map(
                    (r) =>
                        !r.translated &&
                        ((r.translated = true),
                            (rmap[r.id] = r),
                            (qRvs += `<x><y>${r.title}</y>%%${r.id}<z>${r.body}</z></x>@@${r.id}`))
                );
                ts = ts.concat(
                    (!!qRvs && (await Dinosaur.translateApi("auto", qRvs))) || []
                );
            }
            Dinosaur.applyTranslation(ts, rmap, textObjs);
        },

        translate: async (reviews) => {
            if (
                !Dinosaur.locale ||
                !Dinosaur.config.autoTranslateReviews ||
                (!Dinosaur.isVIPPlan &&
                    !Dinosaur.isPremiumPlan &&
                    !Dinosaur.config.allowedOptions?.includes("autoTranslateReviews"))
            )
                return;
            await Dinosaur.translateG(reviews ?? Dinosaur.reviews);
        },

        keepScrollOffset: (oldPos) => {
            const pos = document.documentElement.scrollHeight - window.scrollY;
            oldPos && window.scrollBy(0, pos - oldPos);
            return pos;
        },

        loadProductReviews: async ({
            page,
            pageSize,
            sort,
            filter,
            featured,
            requireCount,
            checkFirstPageReviews,
            keepScrollPosition,
            isShowMore,
            cacheFistPage,
        }) => {
            if (Dinosaur.isUIPreview) return;
            page && (Dinosaur.data.page = +page);
            let reviews, reviewsCount;
            if (Dinosaur.isFeaturedWidget) {
                reviews =
                    Dinosaur.featuredReviews?.slice(
                        (Dinosaur.data.page - 1) * Dinosaur.config.pageSize,
                        Dinosaur.data.page * Dinosaur.config.pageSize
                    ) ?? [];
            } else {
                (Dinosaur.data.filter == "all" || Dinosaur.data.filter == "any") &&
                    delete Dinosaur.data.filter;
                (Dinosaur.data.filter2 == "all" || Dinosaur.data.filter2 == "any") &&
                    delete Dinosaur.data.filter2;
                $(".ui-onzdwmtm").attr("loading", "");
                Dinosaur.showLoading(".ui-onzdwmtm");
                const res = await Dinosaur.fetchReviews(
                    {
                        ...Dinosaur.data,
                        featured,
                        sort: sort ?? Dinosaur.data.sort,
                        filter: filter ?? Dinosaur.data.filter,
                        page: page ?? Dinosaur.data.page,
                        pageSize: pageSize ?? Dinosaur.config.pageSize,
                        pinnedFirst: Dinosaur.config.pinnedFirst,
                        requireCount,
                        checkFirstPageReviews,
                    },
                    cacheFistPage ? "getkey" : true
                );
                Dinosaur.hideLoading();
                if (cacheFistPage) {
                    Dinosaur.queryCache[res] = { reviews: Dinosaur.reviews };
                    return;
                } else {
                    reviews = res.reviews;
                    reviewsCount = res.reviewsCount;
                }
            }
            let rebuild = true;
            isShowMore
                ? reviews?.length
                    ? (Dinosaur.reviews = Dinosaur.reviews.concat(reviews))
                    : (rebuild = false)
                : (Dinosaur.reviews = reviews);
            Dinosaur.buildPagingSection(reviewsCount);
            rebuild && Dinosaur.buildReviewsSection();
            if (Dinosaur.config.widgetLayout == "grid") {
                await Dinosaur.buildGrid();
            }
            return reviewsCount;
        },

        showLoading: (selector) => {
            $(selector)
                .append(
                    `<div class="ui-ces7lmgn">
  <svg viewBox="0 0 50 50" style="width:80px;height:80px;fill:var(--dinosaur-action-button-fill)">
    <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
      <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.8" repeatCount="indefinite"></animateTransform>
    </path>
  </svg>
</div>`).attr("loading", "")
        },

        hideLoading: (selector) => {
            (selector
                ? $(selector).removeAttr("loading").find(".ui-ces7lmgn")
                : $(".ui-ces7lmgn")
            ).remove();
        },

        checkWindowScrollbar: (force) => {
            if (Dinosaur.isUIPreview) return;
            if (force || document.querySelector("body>.ui-drz7nqpr[show]")) {
                if (!window.onscroll) {
                    const scrollTop =
                        window.pageYOffset || document.documentElement.scrollTop,
                        scrollLeft =
                            window.pageXOffset || document.documentElement.scrollLeft;
                    window.onscroll = function () {
                        window.scrollTo(scrollLeft, scrollTop);
                    };
                }
            } else {
                window.onscroll = null;
            }
        },

        showBackdropBox: (box) => {
            $(box).css("display", "flex");
            setTimeout(() => {
                $(box).attr("show", "");
            });
        },

        hideBackdropBox: (box, callback) => {
            $(box).removeAttr("show");
            setTimeout(() => {
                $(box).css("display", "none");
                callback?.();
            }, 510);
        },

        fetchReviews: async (data, cached = true) => {
            return await Dinosaur.doFetch({
                url: "/apps/dino/get-reviews",
                cached,
                data,
            });
        },

        loadAllReviews: async (more) => {
            Dinosaur.allrvsPage = (Dinosaur.allrvsPage || 1) + !!more;
            Dinosaur.allrvsPageSize = 10;
            const MAX_ALL_REVIEWS = 100;
            Dinosaur.showLoading(more ? ".ui-o760fpnb" : ".ui-tn86u889");
            const res = await Dinosaur.fetchReviews({
                featured: true,
                sort: "featured",
                page: Dinosaur.allrvsPage,
                pageSize: Dinosaur.allrvsPageSize,
                pinnedFirst: Dinosaur.config.pinnedFirst,
            });
            Dinosaur.hideLoading(more ? ".ui-o760fpnb" : ".ui-tn86u889");
            if (res?.reviews?.length) {
                !Dinosaur.allReviews && (Dinosaur.allReviews = []);
                Dinosaur.allReviews = Dinosaur.allReviews.concat(res.reviews);
                Dinosaur.buildReviewsSection(
                    true,
                    Dinosaur.allReviews,
                    res.reviews.length >= Dinosaur.allrvsPageSize &&
                    Dinosaur.allReviews.length < MAX_ALL_REVIEWS
                );
            } else {
                $(".ui-o760fpnb").remove();
            }
        },

        showAllReviews: async () => {
            let $allrvs = $(".ui-3ferhlvj");
            if (!$allrvs.length) {
                $allrvs =
                    $(`<div class="ui-3ferhlvj ui-drz7nqpr" style="z-index:${Dinosaur.zIndex - 1}">
    <div class="ui-xkyydlpu">
      <div class="ui-vbexmhlq-header"><div class="ui-vnl4zkmr ui-0b5o5pbr" ui-qv6rlqls>${Dinosaur.config.tabTitle}</div>
            ${Dinosaur.config.sideBarShowReviewsCount ? `<div class="dinosaur-reviews-summary">${Dinosaur?.shopSummary?.total > 1
                            ? `
                            ${Dinosaur.buildStarRating(Dinosaur.shopSummary.rating)}
                            <div class="ui-e5ckh935">${Dinosaur.shopSummary.rating} ★ </div>
                            <span class="ui-0zclluae" ui-qv6rlqls>(${Dinosaur?.shopSummary?.total})</span>
                            ${Dinosaur.config.sideBarLinkAllReviews
                                ? Dinosaur.isUIPreview
                                    ? ` | <span class="ui-ku9vz5jj" ui-qv6rlqls>${Dinosaur.config.textShowAll}</span>`
                                    : Dinosaur.isVIPPlan || Dinosaur.config.allowedOptions?.includes("featuredLinkAllReviews")
                                        ? ` | <a href=${Dinosaur.config.allReviewsPageUrl || "/pages/reviews"} target="_blank"><span class="ui-ku9vz5jj" ui-qv6rlqls>${Dinosaur.config.textShowAll}</span></a>`
                                        : ""
                                : ""}` : ""}${Dinosaur.getSvg("amazon")}</div>` : ``}
        <i class="ui-36c8wcbw"></i>
      </div>
      <div class="ui-tn86u889${Dinosaur.isMobile ? '" mobile' : ' ui-cfsr3ays"'} nomore>
        <div class="ui-5jhia8mq ui-m4viwpr6" ${Dinosaur.config.widgetLayout}>
        </div>
        <button type="button" class="ui-o760fpnb" onclick="Dinosaur.loadAllReviews(true)" ui-qv6rlqls>${Dinosaur.config.textShowMore}</button>
      </div>
    </div>
    </div>
    `);
                $(Dinosaur.container).append($allrvs);
                $(".ui-xkyydlpu .ui-36c8wcbw").click(() => {
                    Dinosaur.hideBackdropBox(".ui-3ferhlvj");
                });

                Dinosaur.showBackdropBox(".ui-3ferhlvj");
                Dinosaur.loadAllReviews();
            } else {
                Dinosaur.showBackdropBox(".ui-3ferhlvj");
                Dinosaur.buildGrid(true);
            }
        },

        navigateToPage: async (page) => {
            let thePage = Dinosaur.data.page;
            if (page == "-" && Dinosaur.data.page > 1) {
                thePage--;
            } else if (
                (page == "+" || page == "++") &&
                Dinosaur.data.page < Dinosaur.totalPages
            ) {
                thePage++;
            } else thePage = +page;
            if (Dinosaur.data.page == thePage) return;
            Dinosaur.data.page = thePage;
            Dinosaur.isUIPreview
                ? Dinosaur.buildPagingSection()
                : await Dinosaur.loadProductReviews({
                    keepScrollPosition: true,
                    isShowMore: page == "++",
                });
        },

        buildStarRating: (rating) => {
            let html = "";
            if (rating == -1)
                html += `<span class="ui-fk77y41y">${Dinosaur.config.ratingIcon.charAt(
                    0
                )}</span>`;
            else if (rating > Math.floor(rating)) {
                html += `<div class="ui-zctmvjp6" style="--value:${Math.ceil(rating * 2) / 2}">
        <div class="ui-c43qhd80">
          ${`<span class="ui-fk77y41y">${`${Dinosaur.config.ratingIcon[1]}`}</span>`.repeat(5)}</div>
        <div class="ui-c43qhd80">
          ${`<span class="ui-fk77y41y">${`${Dinosaur.config.ratingIcon[0]}`}</span>`.repeat(5)}</div></div>`;
            } else {
                html += '<div class="ui-c43qhd80">';
                for (let i = 1; i <= 5; i++) {
                    const ch = rating >= i ? 0 : rating >= i - 0.5 ? 0 : 1;
                    html += `<span class="ui-fk77y41y"${ch == 0 ? " solid" : ""
                        }>${`${Dinosaur.config.ratingIcon.charAt(ch)}`}</span>`;
                }
                html += "</div>";
            }
            return html;
        },

        buildPagingSection: (reviewsCount) => {
            if (
                !Dinosaur.config.showBody ||
                !Dinosaur.config.paginationType ||
                Dinosaur.config.paginationType.includes("none") ||
                !$(".ui-u6og66x9").length
            )
                return;
            reviewsCount =
                (reviewsCount ||
                    Dinosaur.featuredReviews?.length ||
                    Dinosaur.reviewsTotal ||
                    (Dinosaur.pageType != "product" && Dinosaur.shopSummary.total) ||
                    parseInt(Dinosaur.productRating.realTotal)) ||
                0;
            reviewsCount > Dinosaur.limitReviews && (reviewsCount = Dinosaur.limitReviews);
            const totalPage = reviewsCount
                ? 1 + Math.floor((reviewsCount - 1) / Dinosaur.config.pageSize)
                : 0;
            let html_nav = "";
            let pages = [];
            Dinosaur.totalPages = totalPage;
            if (totalPage > 1) {
                const isFirstPage = Dinosaur.data.page < 2,
                    isLastPage = Dinosaur.data.page >= totalPage,
                    isTypeNumbers = Dinosaur.config.paginationType.includes("numbers");
                if (isTypeNumbers) {
                    Dinosaur.data.page - 3 > 0 &&
                        pages.push({ value: 1, label: "", type: "first" });
                    Dinosaur.data.page - 2 > 0 && pages.push({ value: Dinosaur.data.page - 2 });
                    Dinosaur.data.page - 1 > 0 && pages.push({ value: Dinosaur.data.page - 1 });
                    pages.push({ value: Dinosaur.data.page });
                    Dinosaur.data.page + 1 <= totalPage &&
                        pages.push({ value: Dinosaur.data.page + 1 });
                    Dinosaur.data.page + 2 <= totalPage &&
                        pages.push({ value: Dinosaur.data.page + 2 });
                    Dinosaur.data.page + 3 <= totalPage &&
                        pages.push({ value: totalPage, label: "", type: "last" });
                } else if (Dinosaur.config.paginationType.includes("pages")) {
                    if (totalPage < 7) {
                        pages = Array.apply(null, Array(totalPage)).map(function (_, i) {
                            return { value: i + 1 };
                        });
                    } else {
                        pages.push({ value: 1 });
                        Dinosaur.data.page - 1 >= 3 &&
                            pages.push({ value: Dinosaur.data.page - 1 == 3 ? 2 : "..." });
                        Dinosaur.data.page - 1 > 1 &&
                            pages.push({ value: Dinosaur.data.page - 1 });
                        Dinosaur.data.page > 1 &&
                            Dinosaur.data.page < totalPage &&
                            pages.push({ value: Dinosaur.data.page });
                        Dinosaur.data.page + 1 < totalPage &&
                            pages.push({ value: Dinosaur.data.page + 1 });
                        Dinosaur.data.page + 1 <= totalPage - 2 &&
                            pages.push({
                                value:
                                    Dinosaur.data.page + 1 == totalPage - 2 ? totalPage - 1 : "...",
                            });
                        totalPage > 1 && pages.push({ value: totalPage });
                    }
                } else if (Dinosaur.config.paginationType.includes("prev-next")) {
                    pages.push(
                        {
                            disabled: isFirstPage,
                            value: "-",
                            label: Dinosaur.config.textPrevPage,
                        },
                        {
                            disabled: isLastPage,
                            value: "+",
                            label: Dinosaur.config.textNextPage,
                        }
                    );
                } else if (Dinosaur.config.paginationType.includes("more")) {
                    !isLastPage &&
                        pages.push({ value: "++", label: Dinosaur.config.textShowMore });
                }
                pages.forEach((p) => {
                    p.value == "..." || p.disabled
                        ? (html_nav += `<button type="button" disabled page="${p.value
                            }" class="ui-2bcr6fwb" ui-qv6rlqls>${p.label ?? p.value
                            }</button>`)
                        : (html_nav += `<button type="button" class="ui-2bcr6fwb"${p.value == Dinosaur.data.page ? " active" : ""
                            }${isTypeNumbers ? " numbers" : ""} ${p.type ?? ""} page="${p.value
                            }" ui-qv6rlqls>${p.label ?? p.value}</button>`);
                });
            }
            $(".ui-u6og66x9").html(html_nav);
            $(".ui-2bcr6fwb:not([disabled]):not([active])").click(
                async function () {
                    $(this).attr("loading", "");
                    await Dinosaur.navigateToPage($(this).attr("page"));
                    $(this).removeAttr("loading");
                }
            );
        },

        buildMediaTag: ({ src, isThumb, reviewId, autoPlay, isListPhotoVideo, first, type }) => {
            const srcLowcase = src.toLowerCase().trim();
            const common = `${isThumb ? ` onerror="window.DinosaurMediaErr?.(this)"` : ""
                }${reviewId ? ` reviewId="${reviewId}"` : ""}`;
            const ext = srcLowcase
                .substring(1 + srcLowcase.lastIndexOf("."))
                .split("?")[0];
            const disableLazyload =
                Dinosaur.config.disableLazyload ||
                Dinosaur.isUIPreview ||
                Dinosaur.config.widgetLayout == "carousel" ||
                Dinosaur.config.widgetLayout == "slide";
            // !srcLowcase.startsWith("http://") &&
            //     !srcLowcase.startsWith("https://") &&
            //     !src.startsWith("/") &&
            //     (src = `${Dinosaur.mediaHost}/${src}`);
            let item = "";
            if (["mov", "mp4", "m4v", "ogv", "ogm", "webm"].includes(ext))
                (item = isThumb
                    ? `<div class="ui-jah04t9d" video${!first ? " hide" : ""}><video thumb preload="metadata" ${disableLazyload
                        ? `src=${src}`
                        : `data-src="${src}" class="lazy"`}${common}></video></div>`
                    : `<video src="${src}" controls${autoPlay ? " autoplay" : ""}${common}></video>`);
            else
                item = `<img ${isThumb
                    ? `thumb ${disableLazyload ? `src=${src}` : `data-src="${src}"`} class="ui-jah04t9d ${disableLazyload ? "" : "lazy"}"`
                    : `src="${src}"`}${common}${!first ? " hide" : ""}>`;
            return type == "streamlined"
                ? `<div class="ui-rfwyd3oq"${!first ? " hide" : ""}>
                        <div class="ui-ladlmzji">${item}</div>
                    </div>`
                : item;
        },

        setCookie: (cname, cvalue, exdays = 10) => {
            var d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        },

        getCookie: (cname) => {
            var name = cname + "=";
            var ca = document.cookie.split(";");
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == " ") {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },

        formatDate: (date) => {
            if (Dinosaur.config.textReviewDateFormat && Dinosaur.momentLoaded) {
                return moment(date).format(Dinosaur.config.textReviewDateFormat);
            }
            typeof date === "string" && date.endsWith("Z") && (date = new Date(date));
            if (date instanceof Date) {
                return date.toLocaleString("default", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                });
            }
            return date;
        },

        getReviewLiked: function () {
            let reviewId, likes, action;
            typeof arguments[0] == "object"
                ? ({ reviewId, likes, action } = arguments[0])
                : (reviewId = arguments[0]);

            Dinosaur.likedReviews == undefined &&
                (Dinosaur.likedReviews = Dinosaur.getCookie("DinosaurHelpful") ?? "");

            const reviewLike = {
                isLiked: undefined,
                count: 0,
                time: 0,
            };

            const likeToString = () =>
                reviewLike.isLiked == undefined
                    ? ""
                    : `${reviewId}#${reviewLike.isLiked ? "1" : "0"}:${reviewLike.count
                    }:${reviewLike.time},`;

            const saveLike = () => {
                if (reviewLike.isLiked == undefined) return;
                if (reviewLike.position) {
                    Dinosaur.likedReviews =
                        Dinosaur.likedReviews.substring(0, reviewLike.position.begin) +
                        likeToString() +
                        Dinosaur.likedReviews.substring(reviewLike.position.end + 1);
                } else Dinosaur.likedReviews += likeToString();
                Dinosaur.setCookie("DinosaurHelpful", Dinosaur.likedReviews);
            };

            const search = `${reviewId}#`;
            let i = Dinosaur.likedReviews?.indexOf(search);
            let found = i >= 0;
            if (found) {
                const k = search.length;
                let j = Dinosaur.likedReviews?.indexOf(",", i + k);
                j < 0 && (j = Dinosaur.likedReviews.length);
                const parts = Dinosaur.likedReviews.substring(i + k, j).split(":");
                reviewLike.isLiked = parts[0]?.length > 0 ? parts[0] == 1 : undefined;
                reviewLike.count = Number(parts[1]) || 0;
                reviewLike.time = Number(parts[2]) || 0;
                reviewLike.position = { begin: i, end: j };
            }
            if (action) {
                reviewLike.isLiked = action == "like";
                reviewLike.count = likes;
                reviewLike.time = Math.floor(+new Date() / 1000);
                saveLike();
            }
            return reviewLike;
        },

        xssEscape: (s) => {
            return s?.length
                ? s
                    .replace(/<S/g, "&lt;S")
                    .replace(/<s/g, "&lt;s")
                    .replace(/<\/S/g, "&lt;&#x2F;S")
                    .replace(/<\/s/g, "&lt;&#x2F;s")
                : s ?? "";
        },

        buildVerifiedBadge: () => {
            let text = Dinosaur.config.textVerified,
                tooltip;
            if (text?.toLowerCase()?.startsWith("tooltip:")) {
                text = text.substring(8).trim();
                tooltip = true;
            }
            return `<div class="ui-c06jz2h4${tooltip ? " ui-48vtlz50" : ""}">${text ? `<span${tooltip ? ` class="ui-48vtlz50-text"` : ""} ui-qv6rlqls>${text}</span>` : ""}</div>`;
        },

        buildReviewsSection: (allrvs, reviews, more) => {
            if (!allrvs && !Dinosaur.config.showBody) return "";
            let layout = Dinosaur.config.widgetLayout;
            allrvs && layout != "list" && layout != "grid" && (layout = "list");
            let html = "";
            const isCard = layout == "grid" || layout == "carousel";
            const isSwipe = layout == "slide" || layout == "carousel";
            const isSlide = layout == "slide";
            const isList = layout == "list";
            const startIndex = (Dinosaur.data.page - 1) * Dinosaur.config.pageSize;
            !reviews && (reviews = Dinosaur.reviews);
            reviews?.forEach((review, index) => {
                if (
                    !allrvs &&
                    !Dinosaur.config.paginationType.includes("more") &&
                    index >= Dinosaur.config.pageSize
                )
                    return;
                if (startIndex + index >= Dinosaur.limitReviews) return;
                const myLike = Dinosaur.getReviewLiked(review.id);
                myLike.time &&
                    review.likedTime < myLike.time &&
                    (review.liked = myLike.count);
                review.liked = Math.max(+review.liked || 0, 0);
                const medias = Dinosaur.xssEscape(
                    (review.images || "") +
                    "," +
                    ((!Dinosaur.isFreePlan &&
                        !Dinosaur.isEssentialPlan &&
                        review.videos?.split(",")?.[0]) ||
                        "")
                )
                    .split(",")
                    .slice(0, Dinosaur.limitPhoto || 10)
                    .filter((src) => src.length);
                html += `<div class="ui-soy2qxsg${isSwipe ? " swiper-slide" : ""
                    }">
      <div class="ui-fclc03pj"${isCard ? " card" : ""} reviewid="${review.id
                    }">`;
                if (isCard && medias?.length && Dinosaur.config.showPhotoVideo) {
                    html += `<div class="ui-1xpi0b3y">`;
                    medias.forEach((src) => {
                        html += Dinosaur.buildMediaTag({ src, isThumb: true, reviewId: review.id });
                    });
                    html += `</div>${medias.length > 1
                        ? `<div class="ui-pn4pd2dx">
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMHB4IiBoZWlnaHQ9IjIwcHgiIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZmlsbD0iIzAwMDAwMCIgZD0iTTcgM2ExIDEgMCAwIDAtMSAxdjNIM2ExIDEgMCAwIDAtMSAxdjEyYTEgMSAwIDAgMCAxIDFoMTRhMSAxIDAgMCAwIDEtMXYtM2gzYTEgMSAwIDAgMCAxLTFWNGExIDEgMCAwIDAtMS0xem0xMCA0SDhWNWgxMnYxMGgtMlY4YTEgMSAwIDAgMC0xLTFtLTEgMnY2Ljc0bC00LjUwOS00LjFMNCAxOC42MzJWOXptLTQuNDkxIDUuMzZMMTYgMTguNDQyVjE5SDYuNTM3ek03IDEzLjVhMS41IDEuNSAwIDEgMCAwLTNhMS41IDEuNSAwIDAgMCAwIDMiLz48L3N2Zz4=" alt="dino-image"/>
                            <div>+${medias.length - 1}</div>
                        </div>`
                        : ""
                        }`;
                }
                const country = review.country?.split("/")[0].toLowerCase();
                const backgroundPos =
                    Dinosaur.config.showReviewerCountry &&
                    country &&
                    ((p) => {
                        return p >= 0
                            ? `${-(p % 20) * 20}px -${Math.floor(p / 20) * 15}px`
                            : "";
                    })(Dinosaur.countryCodes.indexOf(country));
                const _name = `<div class="ui-9dp1jl2h">${Dinosaur.config.showReviewerName ? Dinosaur.xssEscape(review.customer) : ""}</div>`;
                const _flag = `${country?.toUpperCase() || ""}${backgroundPos ? `<div class="ui-ygphxp0r" style="background-position: ${backgroundPos}"></div>` : ""}`
                const _date = Dinosaur.config.showReviewDate ? `<div class="ui-jc3w2dn7" data-date="${Dinosaur.xssEscape(review.createdAt)}">${Dinosaur.xssEscape(Dinosaur.formatDate(review.createdAt))}</div>` : ``;
                const _verified = (review.isVerified || review.purchaseVerified) && Dinosaur.config.showVerifiedBadge ? Dinosaur.buildVerifiedBadge() : "";
                const _rating = `${Dinosaur.buildStarRating(review.rating)}`;
                let _row1 = "",
                    _row2 = "",
                    _row3 = "";
                if (isCard) {
                    _row1 = `${_name}${_verified}`;
                    _row2 = `${_flag}<span class="ui-rc1n41ps">•</span>${_date}`;
                    _row3 = `${_rating}`
                } else if (isSlide) {
                    _row1 = `${_name}${_verified}`;
                    _row2 = `${_flag}<span class="ui-rc1n41ps">•</span>${_date}`;
                    _row3 = `${_rating}`
                } else {
                    _row1 = `${_name}${_verified}`;
                    _row2 = `${_flag}<span class="ui-rc1n41ps">•</span>${_date}`;
                    _row3 = `${_rating}`
                }
                html += `<div class="ui-y5jskyr6">
                <div class="ui-x67q571f">
                <div class="ui-97vf7t41">
                    ${Dinosaur.generateAvatarName(review?.customer || "")}
                    ${(Dinosaur.config.showAmazonSign && review.source == "amazon") ? Dinosaur.getSvg("amazon") : ""}
                </div>
                <div class="ui-os2o4sq4 1">
                    <div class="ui-dtskm1x0">${_row1}</div>
                    <div class="ui-dtskm1x0">${_row2}</div>
                </div>
                </div>
      ${_row3}
      ${review.title && Dinosaur.config.showReviewTitle
                        ? `<span class="ui-zjf7bzn2">${Dinosaur.xssEscape(
                            Dinosaur.correctReviewTitle(review.title)
                        )}</span>`
                        : ""
                    }`;

                if (isSlide && medias?.length && Dinosaur.config.showPhotoVideo) {
                    html += '<div class="ui-yck7o6wt">';
                    medias.forEach((src) => {
                        html += Dinosaur.buildMediaTag({ src, isThumb: true, reviewId: review.id });
                    });
                    html += "</div>";
                }

                Dinosaur.config.showReviewContent &&
                    (html += `<div class="ui-b0cv1vjg"><div class="ui-ku6zl7yi">${Dinosaur.xssEscape(
                        review.body
                    )}</div></div>`);

                if (isList && medias?.length && Dinosaur.config.showPhotoVideo) {
                    html += '<div class="ui-yck7o6wt">';
                    medias.forEach((src) => {
                        html += Dinosaur.buildMediaTag({ src, isThumb: true, reviewId: review.id });
                    });
                    html += "</div>";
                }
                ((Dinosaur.config.showLikeReview && !Dinosaur.isFeaturedWidget && !Dinosaur.isAllReviewsPage) ||
                    (Dinosaur.isFeaturedWidget && review.liked) ||
                    (Dinosaur.isAllReviewsPage && review.liked)) &&
                    (html += `<div class="ui-gdye6y5w">
      <span class="ui-0mgnqaiv" reviewid=${review.id} likes=${review.liked}${myLike.isLiked ? ' liked="1"' : ""}>
        <svg width="16" height="16" viewBox="0 0 14 13"><path d="m0 12.727h2.5455v-7.6364h-2.5455v7.6364zm14-7c0-0.7-0.57273-1.2727-1.2727-1.2727h-4.0091l0.63636-2.9273v-0.19091c0-0.25455-0.12727-0.50909-0.25455-0.7l-0.7-0.63636-4.2 4.2c-0.25455 0.19091-0.38182 0.50909-0.38182 0.89091v6.3636c0 0.7 0.57273 1.2727 1.2727 1.2727h5.7273c0.50909 0 0.95455-0.31818 1.1455-0.76364l1.9091-4.5182c0.063636-0.12727 0.063636-0.31818 0.063636-0.44545v-1.2727h0.063636v0z"/></svg>
        <span class="ui-6dyriul0">${Dinosaur.buildLikeContent(
                        myLike.isLiked,
                        review.liked
                    )}</span>
      </span>
        </div>`);

                html += "</div>";

                Dinosaur.config.showReply &&
                    review.reply &&
                    (html += `<div class="ui-vfi3d15b">
        ${Dinosaur.config.textShopReply
                            ? `<h3 ui-qv6rlqls>${Dinosaur.config.textShopReply}</h3>`
                            : ""
                        }
        <span>${Dinosaur.xssEscape(review.reply)}</span></div>`);

                (allrvs ||
                    (Dinosaur.isAllReviewsPage && Dinosaur.config.allReviewsShowProduct) ||
                    (Dinosaur.isFeaturedWidget && Dinosaur.config.featuredShowProduct)) &&
                    review.productTitle &&
                    (html += `<div class="ui-qjhck29r"><a rendered href="${Dinosaur.isUIPreview
                        ? "#"
                        : Dinosaur.xssEscape(
                            review.onlineStoreUrl || `/products/${review.productHandle}`
                        )
                        }" ui-qv6rlqls style="display:flex">
                            <div class="ui-hzdh3elw" style="width:40px;height:40px">
                                <img src="${review.productImage}" alt="" style="width: 100%;height:100%;border-radius:10px"/>
                            </div>
                            <span>${Dinosaur.xssEscape(review.productTitle)}</span>
                        </a></div>`);

                html += "</div></div>";
            });
            isSwipe &&
                reviews.length > 0 &&
                (html = `<div class="swiper-wrapper">${html}</div><div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>`);
            const boxClass = allrvs ? ".ui-5jhia8mq" : ".ui-4btxmveg";
            if (allrvs) {
                if (!html)
                    html = `<div class="ui-kbm2ft92" style="padding-top:10%;flex-direction: column;">
        <img src="${Dinosaur.host}/storefront/empty.png" style="object-fit:none;margin-bottom:20px;" onerror="this.style.display='none'">
        <p>Stay tuned for our awesome reviews.<br>They will appear here in no time.<br><b>Shop till you drop!</b></p></div>`;
                !reviews?.length || more === false
                    ? $(".ui-tn86u889").attr("nomore", "")
                    : $(".ui-tn86u889").removeAttr("nomore");
            }
            $(boxClass).html(html).attr(layout, "");
            if (reviews?.length > 0) {
                Dinosaur.buildGrid(allrvs);
                $(boxClass + " .ui-jah04t9d:not([has-click])")
                    .attr("has-click", "")
                    .click(function (e) {
                        Dinosaur.swiperReviews?.autoplay.stop();
                        Dinosaur.showImage(e.target);
                    });
                !Dinosaur.isFeaturedWidget && !Dinosaur.isAllReviewsPage && ($(".ui-0mgnqaiv:not([has-click])")
                    .attr("has-click", "")
                    .click(function () {
                        Dinosaur.toggleLikeReview(this);
                    }));
                Dinosaur.checkFormatDate();
                Dinosaur.checkLazyLoad(allrvs);
                Dinosaur.checkReadMore(boxClass);
                Dinosaur.observeResizing();
                !Dinosaur.isBuilding && Dinosaur.translate(reviews);
                !allrvs && Dinosaur.checkReviewSwiper();
            }
        },
        buildPopupWidget: async (reviews) => {
            const closedPopup = !!Dinosaur.getCookie("ui-ebcgjue5");
            if (!Dinosaur.renderPopup && !closedPopup && !(Dinosaur.isMobile && Dinosaur.config.hideWidgetInMobileTablet)) {
                if (
                    window._popupActive
                    // (Dinosaur.config.showPopupHomePage && Dinosaur.isHomePage) ||
                    // (Dinosaur.config.showPopupCollectionPage && Dinosaur.isCollectionPage) ||
                    // (Dinosaur.config.showPopupProductPage && Dinosaur.isProductPage) ||
                    // (Dinosaur.config.showPopupOthersPage && Dinosaur.isOtherPage)
                ) {
                    let $popup = $(`.ui-ebcgjue5`);
                    if (!$popup.length) {
                        !reviews && (reviews = Dinosaur.popupReviews);
                        let html = ``;
                        reviews.forEach((review) => {
                            return html += `
              <a href=${Dinosaur.xssEscape(review.onlineStoreUrl || `/products/${review.productHandle}`)} style="color: inherit;">
                <div class="ui-jeobf5zg" pos="${Dinosaur.config.widgetPosition}" style="border-radius: ${Dinosaur.config.cornerRadiusPopup}px;color: var(--dinosaur-color-text);">
                  <div class="ui-0thl33cn" style="border-radius: ${Dinosaur.config.cornerRadiusPopup}px 0 0 ${Dinosaur.config.cornerRadiusPopup}px">
                    <img class="ui-1qg4wwhh" src="${review.productImage}" title="Review picture"/>
                  </div>
                  <div class="ui-9zpi1arq">
                    <div class="ui-ofnozk60">
                      <div class="ui-j6d00lyt">${review.customer}</div>
                      <div class="ui-7no28fne">${Dinosaur.buildStarRating(review.rating)}</div>
                      <div class="ui-6wkfkp8c">
                        <span class="ui-adcjobtd">${review.title || ""}</span>
                        <span class="ui-xyjg95nf">${review.body || ""}</span>
                      </div>
                    </div>
                    <div class="ui-dlq7rg0c">
                      <div class="ui-g6nj6yeo">${review?.productTitle}</div>
                    </div>
                  </div>
                  ${Dinosaur.config.showAmazonSignPopup && review.source == "amazon" ? Dinosaur.getSvg("amazon") : ``}
                  <span class="ui-i8m0838a"></span>
                </div>
                </a>`;
                        })
                        $popup = $(
                            `<div class="ui-ebcgjue5">${html}</div>`
                        );
                        Dinosaur.config.widgetPosition && ($popup.attr("pos", Dinosaur.config.widgetPosition));
                        $(Dinosaur.container).append($popup);
                        $(".ui-i8m0838a").click(function (e) {
                            e.preventDefault();
                            $(".ui-ebcgjue5").remove();
                            Dinosaur.setCookie("ui-ebcgjue5", true, 0.0208);
                        });
                        const listCard = $(`.ui-ebcgjue5 .ui-jeobf5zg`);
                        await Dinosaur.delay(Dinosaur.config.delayBeforeFirstPopup * 1000);
                        for (let i = 0; i < listCard.length; i++) {
                            $(listCard[i]).attr("active", "");
                            await Dinosaur.delay(Dinosaur.config.popupDuration * 1000);
                            $(listCard[i]).removeAttr("active");
                            await Dinosaur.delay(Dinosaur.config.intervalBetweenPopup * 1000);
                        }
                    };
                    Dinosaur.log(`Popup widget render done`);
                };
                Dinosaur.renderPopup = true;
                Dinosaur.log(`Popup checking done`);
            }
        },

        correctReviewTitle: (title) =>
            title.startsWith("((") && title.includes("))")
                ? title.substring(title.indexOf("))") + 2).trim()
                : title,

        buildLikeContent: (isLiked, likes) => {
            return `${likes > 0 ? likes : isLiked ? "1" : ""}${!isLiked && Dinosaur.config.textLikeReview && !Dinosaur.isFeaturedWidget && !Dinosaur.isAllReviewsPage
                ? `${likes > 0 ? "<i></i>" : ""}<span ui-qv6rlqls>${Dinosaur.config.textLikeReview
                }</span>`
                : ""
                }`;
        },

        checkReadMore: (boxClass = ".ui-4btxmveg") => {
            setTimeout(() => {
                $(boxClass + " .ui-b0cv1vjg").each(function () {
                    if (this.scrollHeight > this.clientHeight + 10)
                        $(this)
                            .attr("has-click", "")
                            // .attr("readmore", "")
                            .off("click")
                            .on("click", () => {
                                let reviewItem = $(this).closest(
                                    ".ui-y5jskyr6"
                                )[0];
                                reviewItem = $(reviewItem).clone()[0];
                                if (reviewItem.savedParent) return;
                                reviewItem.savedParent = reviewItem.parentElement;
                                reviewItem.index = $(reviewItem).index();
                                Dinosaur.preventCardsArrange = true;
                                Dinosaur.showMessage({
                                    html: reviewItem,
                                    closeButton: "",
                                    onHide: () => {
                                        Dinosaur.preventCardsArrange = false;
                                        reviewItem.index > 0
                                            ? $(reviewItem.savedParent)
                                                .children(":first")
                                                .after(reviewItem)
                                            : $(reviewItem.savedParent).prepend(reviewItem);
                                        delete reviewItem.savedParent;
                                    },
                                });
                            });
                    else $(this).removeAttr("readmore").off("click");
                });
            }, 1500);
        },

        toggleLikeReview: (element) => {
            const $like = $(element);
            const reviewId = $like.attr("reviewid");
            const toggle = $like.attr("toggle") == 1;
            const liked = $like.attr("liked") == 1;
            const likes = +$like.attr("likes");
            const newToggle = !toggle;
            const newLiked = !liked;
            const newLikes = (newLiked ? 1 : -1) + likes;

            $like
                .attr({
                    toggle: newToggle ? 1 : 0,
                    liked: newLiked ? 1 : 0,
                    likes: newLikes,
                })
                .children(".ui-6dyriul0")
                .html(Dinosaur.buildLikeContent(newLiked, newLikes));

            Dinosaur.getReviewLiked({
                reviewId,
                likes: newLikes,
                action: newLiked ? "like" : "dislike",
            });

            if (!Dinosaur.isUIPreview) {
                Dinosaur.timerLikeReview
                    ? Dinosaur.timerLikeReview[reviewId] &&
                    (clearTimeout(Dinosaur.timerLikeReview[reviewId]),
                        delete Dinosaur.timerLikeReview[reviewId])
                    : (Dinosaur.timerLikeReview = {});
                newToggle &&
                    (Dinosaur.timerLikeReview[reviewId] = setTimeout(() => {
                        Dinosaur.doFetch({
                            url: "/apps/dino/like-review",
                            data: {
                                productId: "" + Dinosaur.data.productId,
                                reviewId,
                                isLiked: newLiked,
                            },
                            callback: (data) => {
                                $like.removeAttr("toggle");
                                if (data.ok) {
                                } else {
                                    //reset status
                                    $like
                                        .attr({ liked: liked ? 1 : 0, likes })
                                        .children(".ui-6dyriul0")
                                        .html(Dinosaur.buildLikeContent(liked, likes));
                                }
                            },
                        });
                        delete Dinosaur.timerLikeReview[reviewId];
                    }, 1000));
            }
        },

        checkFormatDate: () => {
            if (Dinosaur.momentLoaded || Dinosaur.config.showReviewDate === false) return;
            Dinosaur.formatDatePending = () => {
                $(".ui-jc3w2dn7").each(function () {
                    $(this).html(Dinosaur.formatDate($(this).data("date")));
                });
                Dinosaur.formatDatePending = null;
            };
            //Dinosaur.momentLoaded && Dinosaur.formatDatePending();
        },

        checkLazyLoad: (allrvs) => {
            //Check for running LazyLoad
            Dinosaur.lazyLoadedPending = () => {
                try {
                    Dinosaur.lazyLoad = new LazyLoad({
                        class_applied: "lz-applied",
                        class_loading: "lz-loading",
                        class_loaded: "lz-loaded",
                        class_error: "lz-error",
                        class_entered: "lz-entered",
                        class_exited: "lz-exited",
                        callback_loaded: () => {
                            Dinosaur.buildGrid(allrvs);
                        },
                    });
                } catch (error) {
                    Dinosaur.log(`lazyLoadedPending error: ${error}`);
                }
                Dinosaur.lazyLoadedPending = null;
            };
            Dinosaur.lazyLoadLoaded && Dinosaur.lazyLoadedPending();
        },

        checkSwiperLoop: () => {
            window._timerCheckSwiperLoop &&
                (clearTimeout(window._timerCheckSwiperLoop),
                    delete window._timerCheckSwiperLoop);
            window._timerCheckSwiperLoop = setTimeout(() => {
                if (Dinosaur.config.widgetLayout == "carousel") {
                    //await Dinosaur.delay(200);
                    const boxClass = ".ui-4btxmveg";
                    const wItem = $(boxClass + " .ui-soy2qxsg").width();
                    const check =
                        Math.min(Dinosaur.reviews.length, Dinosaur.config.pageSize) * wItem >
                        $(boxClass).width();
                    if (check != (Dinosaur.isLoopSwiper ?? false)) {
                        Dinosaur.isLoopSwiper = check;
                        Dinosaur.buildReviewsSection();
                    }
                }
            }, 200);
        },

        checkReviewSwiper: () => {
            //Check for building Swiper
            if (
                Dinosaur.config.widgetLayout == "carousel" ||
                Dinosaur.config.widgetLayout == "slide"
            ) {
                Dinosaur.swiperLoadedPending = async () => {
                    delete Dinosaur.swiperLoadedPending;
                    const loop = Dinosaur.isLoopSwiper ?? false;
                    const config = Object.assign(
                        {
                            loop,
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: true,
                            },
                            navigation: {
                                nextEl: ".swiper-button-next",
                                prevEl: ".swiper-button-prev",
                            },
                            autoHeight: true,
                            on: {
                                slideChange: function (ev) {
                                    $(ev.el)
                                        .find(".ui-jah04t9d:not([has-click])")
                                        .attr("has-click", "")
                                        .click(function (e) {
                                            Dinosaur.swiperReviews?.autoplay.stop();
                                            Dinosaur.showImage(e.target);
                                        });
                                },
                            },
                        },
                        Dinosaur.config.widgetLayout == "slide"
                            ? {
                                slidesPerView: 1,
                                spaceBetween: 0,
                                autoplay: {
                                    delay: Dinosaur.config.slideDelay * 1000,
                                },
                                centeredSlides: true,
                                initialSlide: 0,
                            }
                            : {
                                slidesPerView: 1,
                                spaceBetween: 10,
                                breakpointsBase: "container",
                                breakpoints: {
                                    510: {
                                        slidesPerView: Math.min(
                                            2,
                                            Dinosaur.reviews?.length || 1,
                                            Dinosaur.config.pageSize
                                        ),
                                        spaceBetween: Dinosaur.isMobile ? 10 : 20,
                                    },
                                    768: {
                                        slidesPerView: Math.min(
                                            3,
                                            Dinosaur.reviews?.length || 1,
                                            Dinosaur.config.pageSize
                                        ),
                                        spaceBetween: Dinosaur.isMobile ? 10 : 20,
                                    },
                                    992: {
                                        slidesPerView: Math.min(
                                            4,
                                            Dinosaur.reviews?.length || 1,
                                            Dinosaur.config.pageSize
                                        ),
                                        spaceBetween: Dinosaur.isMobile ? 10 : 20,
                                    },
                                },
                            }
                    );
                    if (Dinosaur.isLoopSwiper == undefined) {
                        config.on.afterInit = Dinosaur.checkSwiperLoop;
                        config.on.resize = Dinosaur.checkSwiperLoop;
                    } // else delete Dinosaur.isLoopSwiper;
                    $(".ui-4btxmveg").attr({ loop });
                    Dinosaur.swiperReviews = new Swiper(".ui-4btxmveg", config);
                };
                Dinosaur.swiperLoaded && Dinosaur.swiperLoadedPending();
            }
        },

        checkSizeChange: (rebuildStyle) => {
            let W = $(Dinosaur.widgetElement).width();
            (!W ||
                (W > Dinosaur.container.offsetWidth && Dinosaur.container.offsetWidth > 0)) &&
                (W = Dinosaur.container.offsetWidth);
            const sizeMode = W < 500 ? "S" : W < 700 ? "M" : "L";
            if (sizeMode == Dinosaur.sizeMode) {
                if (!Dinosaur.isUIPreview) return false;
            } else
                return (
                    (Dinosaur.sizeMode = sizeMode),
                    rebuildStyle && Dinosaur.buildStyles(true),
                    sizeMode
                );
        },

        buildStyles: (force, forceMobile) => {
            if (
                !force &&
                !Dinosaur.checkSizeChange() &&
                !Dinosaur.isUIPreview &&
                Dinosaur.renderStyles
            )
                return;
            Dinosaur.isMobile =
                forceMobile ||
                Dinosaur.forceMobile ||
                navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/webOS/i) ||
                navigator.userAgent.match(/iPhone/i) ||
                navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/iPod/i) ||
                navigator.userAgent.match(/BlackBerry/i) ||
                navigator.userAgent.match(/Windows Phone/i) ||
                Dinosaur.sizeMode == "S";
            Dinosaur.CARD_MIN_WIDTH =
                Dinosaur.sizeMode == "S" ? Dinosaur.config.mobileCardMinWidth || 180 : 250;

            let styles = `:root {
  --dinosaur-box-border-color: rgba(0,0,0,0.1);
  --dinosaur-button-border-color: rgba(0,0,0,0.2);
  --dinosaur-button-border-radius: ${Dinosaur.config.cornerRadius + "px" || 0}!important;
  --dinosaur-fontsize: ${Dinosaur.config.fontSize ? `${Dinosaur.config.fontSize}px` : "inherit"};
  --dinosaur-fontsize-header: ${Dinosaur.config.fontSize ? `${Math.round((Dinosaur.config.fontSize * 26) / 15)}px` : "26px"};
  --dinosaur-fontsize-sub: ${Dinosaur.config.fontSize ? `${Math.round((Dinosaur.config.fontSize * 13) / 15)}px` : "13px"};
  --dinosaur-average-rating-border-radius: ${Dinosaur.config.cornerRadius + "px" || 0}!important;
  --dinosaur-review-card-border-radius: ${Dinosaur.config.cornerRadius + "px" || 0}!important;
  --dinosaur-review-card-fill: ${Dinosaur.config.colorBackground ? Dinosaur.config.colorBackground : "white"}!important;
  --dinosaur-readmore-fill: ${Dinosaur.config.colorBackground ? Dinosaur.config.colorBackground : "#ffffff"}!important;
  --dinosaur-star-size: ${Dinosaur.config.starSize ? `${Dinosaur.config.starSize}px` : "1.1em"}!important;
  --dinosaur-star-color: ${Dinosaur.config.colorStar}!important;
  --dinosaur-average-color: ${Dinosaur.config.colorAverage ||
                (Dinosaur.contrast("#ffffff", Dinosaur.config.colorStar) < 1.5
                    ? "#000000"
                    : "#ffffff")
                }!important;
  --dinosaur-highlight-color: ${Dinosaur.contrast(Dinosaur.config.colorStar, "#ffffff") < 1.33
                    ? Dinosaur.contrast(Dinosaur.config.colorButtonBackground, "#ffffff") < 1.33
                        ? "#ff8800"
                        : Dinosaur.config.colorButtonBackground
                    : Dinosaur.config.colorStar
                }!important;
  --dinosaur-border-size: ${Dinosaur.config.borderSize || 0}px!important;
  --dinosaur-border-button: ${Dinosaur.config.borderSize
                    ? `${Dinosaur.config.borderSize}px solid ${Dinosaur.config.colorBorderButton
                        ? Dinosaur.config.colorBorderButton
                        : Dinosaur.darkenColor(Dinosaur.config.colorButtonBackground)
                    }` : "_"}!important;
  --dinosaur-border-average: ${Dinosaur.config.borderSize
                    ? `${Dinosaur.config.borderSize}px solid ${Dinosaur.config.colorBorderAverage
                        ? Dinosaur.config.colorBorderAverage
                        : Dinosaur.darkenColor(Dinosaur.config.colorStar)
                    }` : "0"}!important;
  --dinosaur-border-review: ${Dinosaur.config.borderSize /* || Dinosaur.config.colorBackground*/
                    ? `${Dinosaur.config.borderSize}px solid ${Dinosaur.config.colorBorderReview
                        ? Dinosaur.config.colorBorderReview
                        : Dinosaur.darkenColor(Dinosaur.config.colorBackground || "#ffffff")
                    }` : "0"}!important;
  --dinosaur-border-review-card: max(1px,${Dinosaur.config.borderSize || 0
                }px) solid ${Dinosaur.config.colorBorderReview
                    ? Dinosaur.config.colorBorderReview
                    : Dinosaur.config.colorBackground
                        ? Dinosaur.darkenColor(Dinosaur.config.colorBackground || "#ffffff")
                        : `var(--dinosaur-box-border-color)`
                }!important;
    --dinosaur-sidebar-caption-color: ${Dinosaur.config.sidebarCaptionColor || "#ffffff"};
    --dinosaur-sidebar-background-color: ${Dinosaur.config.sidebarBackground || Dinosaur.config.colorStar};
  --dinosaur-action-button-fill: ${Dinosaur.config.colorButtonBackground}!important;
  --dinosaur-action-button-color: ${Dinosaur.config.colorButtonText ||
                (Dinosaur.contrast("#ffffff", Dinosaur.config.colorButtonBackground) < 1.5
                    ? "#000000"
                    : "#ffffff")
                }!important;
    --dinosaur-button-amazon-background: ${Dinosaur.config.colorButtonAmazonBackground ? Dinosaur.config.colorButtonAmazonBackground : "inherit"}!important;
    --dinosaur-button-amazon-color: ${Dinosaur.config.colorButtonAmazonText ? Dinosaur.config.colorButtonAmazonText : "inherit"}!important;
  --dinosaur-color-text: ${Dinosaur.config.colorText ? Dinosaur.config.colorText : "inherit"}!important;
  --dinosaur-color-background: ${Dinosaur.config.colorBackground ? Dinosaur.config.colorBackground : "inherit"}!important;
  --dinosaur-rating-badge-top-padding-product: ${Dinosaur.config.topPaddingProduct || 0}px!important;
  --dinosaur-rating-badge-bottom-padding-product: ${Dinosaur.config.bottomPaddingProduct || 0}px!important;
  --dinosaur-rating-badge-top-padding-collection: ${Dinosaur.config.topPaddingCollection || 0}px!important;
  --dinosaur-rating-badge-bottom-padding-collection: ${Dinosaur.config.bottomPaddingCollection || 0}px!important;
  --dinosaur-verified-color: ${Dinosaur.config.colorVerifiedBadge || "#fff"}!important;
  --dinosaur-verified-background: ${Dinosaur.config.backgroundVerifiedBadge || "#000"}!important;
  --dinosaur-thumb-size: ${Dinosaur.config.thumbSize || 80}px!important;
  --dinosaur-thumb-rounded: ${Dinosaur.config.thumbRounded || 0}px!important;
  --dinosaur-reply-color: ${Dinosaur.config.colorReply || "var(--dinosaur-color-text)"}!important;
  --dinosaur-title-color: ${Dinosaur.config.colorTitle || ""}!important;
  --dinosaur-review-lines: ${Dinosaur.config.maxLines}!important;
  --dinosaur-readmore: "… ${Dinosaur.config.textReadMore || ""}"!important;
  --dinosaur-trust-badge-color: ${Dinosaur.config.trustedBadgeColor};
  --dinosaur-trust-badge-align: ${Dinosaur.config.trustedBadgeAlign || "center"};
  --dinosaur-floating-radius: ${Dinosaur.config.floatingRadius || 0}px;
}
${Dinosaur.isUIPreview ? "" : `body:has(.ui-drz7nqpr[show]) {
      padding-right: var(--dinosaur-scrollbar-width);
      overflow: hidden;
    }`}
#ui-7nc2shc5 label:before {
  font-family: dns-font;
  content: "${Dinosaur.config.ratingIcon.charAt(1)}";
}
#ui-7nc2shc5 input:checked ~ label:before {
  content: "${Dinosaur.config.ratingIcon.charAt(0)}";
}
#ui-7nc2shc5:hover label:before {
  content: "${Dinosaur.config.ratingIcon.charAt(1)}" !important;
}
#ui-7nc2shc5 input:hover ~ label:before {
  content: "${Dinosaur.config.ratingIcon.charAt(0)}" !important;
}
.ui-ygphxp0r {
  background-image: url(https://dinosaur-source.nyc3.cdn.digitaloceanspaces.com/images/flags.png);
}
.ui-u6og66x9 {
  justify-content: ${Dinosaur.config.paginationType.includes("left")
                    ? "left"
                    : Dinosaur.config.paginationType.includes("right") ? "right" : "center"};
}
${Dinosaur.config.widgetLayout == "list" &&
                    (Dinosaur.config.colorBackground || Dinosaur.config.borderSize)
                    ? `
.ui-m4viwpr6[list] .ui-soy2qxsg:not(:first-child) {
  border: 0;
}
.ui-fclc03pj {
  padding: 0 20px;
}`
                    : ""
                }
${Dinosaur.config.widgetLayout == "list"
                    ? `
.ui-m4viwpr6[list] .ui-soy2qxsg {
  border-color: ${Dinosaur.config.colorBackground ? "transparent!important" : "_"};
}`
                    : ""
                }
${Dinosaur.config.colorWidgetBackground
                    ? `
.ui-aarxyted {
  padding: 1px 30px;
  background: ${Dinosaur.config.colorWidgetBackground};
  border-radius: calc(1.5*var(--dinosaur-button-border-radius));
}`
                    : ""
                }
${Dinosaur.config.colorWidgetText
                    ? `
.ui-aarxyted {
  color: ${Dinosaur.config.colorWidgetText};
}`
                    : ""
                }
${Dinosaur.config.widgetLayout == "slide" /* && !Dinosaur.isUIPreview*/
                    ? `
.ui-ygphxp0r {
  margin-top: 3px;
}
`
                    : ""
                }
${Dinosaur.sizeMode != "L" /* activate narrow display mode */
                    ? `
    .ui-5a793kf1{width: 100% !important}
    .ui-6z4xsiyc {
        display: none !important;
    }
    .ui-2x4vqu58{
      width: 70%;
    }
    .ui-xqawfgtj{
      margin-top: 10px;
      width: 100%;
    }
    .ui-bj6l6u41{
      width: 100% !important;
    }
.ui-z1hs9blr {
  text-align: center;
  margin: 15px;
  width: 100%;
}
.ui-z1hs9blr table {
  width: 80%;
}
.ui-pt0buz8w {
  flex-direction: column;
  align-items: center;
}
.ui-g67zesby {
  margin: 0;
}
.ui-s3tdjxqk {
  width: 100%;
}
#ui-7nc2shc5 label {
  font-size: 18px!important;
}
#ui-7nc2shc5 {
  margin-right: 10px!important;
}
.ui-7nc2shc5-notify {
  font-size: 14px!important;
}` : ""}
${!Dinosaur.config.showAverageRating && Dinosaur.sizeMode == "L"
                    ? `
.ui-z1hs9blr {
  align-items: start;
}
.ui-2x4vqu58 {
  margin: 0;
}
` : ""}
${Dinosaur.config.textCustomizeCSS}
`;

            !$("#ui-f1ipkhb5").length &&
                $("head").append(`<style id="ui-f1ipkhb5"></style>`);
            $("#ui-f1ipkhb5").html(styles);
            Dinosaur.renderStyles = true;
        },

        buildReviewsPopup: () => {
            if (
                !(Dinosaur.productRating.total > "0") ||
                !Dinosaur.config.ratingDetailsPopup
            )
                return;
            let html = "";
            html += `<div class="ui-npkbt877">
      <div class="ui-t4d2ztqc">
        <div class="ui-4hbt5nir">
          <span>${Dinosaur.productRating.average} out of 5</span></div>
        <div class="ui-0amlzzup" ui-qv6rlqls>${Dinosaur.productRating.total
                } ${Dinosaur.productRating.total > "1"
                    ? Dinosaur.config.textReviews
                    : Dinosaur.config.textReview
                }</div>
      </div>`;
            html += Dinosaur.buildFilterBox("popup");
            $(".ui-wlqwk85l .ui-gmp9sbz0").append(html);
        },

        buildFilterBox: (popup) => {
            const filtersType =
                popup &&
                    (Dinosaur.config.showReviewFilters == "button" ||
                        !Dinosaur.config.showReviewFilters)
                    ? "star"
                    : Dinosaur.config.showReviewFilters;
            if (!filtersType) return "";
            let html = '<div class="ui-z1hs9blr">';
            if (Dinosaur.productRating.total > "0" && Dinosaur.productRating.count) {
                const totalForPercent = parseInt(
                    Dinosaur.productRating.count.reduce((a, b) => +a + +b)
                );
                let _html = "";
                for (let i = 5; i >= 1; i--) {
                    _html +=
                        filtersType == "button" ? `<button type="button" ${Dinosaur.productRating.count[i - 1] > 0 ? "" : "disabled "}class="ui-zs7en5hj" filter="${i}">${i} ${Dinosaur.buildStarRating(
                            -1
                        )} (${Dinosaur.productRating.count[i - 1]})</button>`
                            : `<div class="ui-8ks86m1u" ${Dinosaur.productRating.count[i - 1] > 0 ? "" : "disabled "
                            } filter="-${i}" ${filtersType}>${filtersType == "number"
                                ? `${i}${Dinosaur.buildStarRating(-1)}`
                                : Dinosaur.buildStarRating(i)
                            }</div>
            <div class="ui-uqvtdvcd">
              <div class="ui-uqvtdvcd-inline" style="width:${Dinosaur.productRating.count[i - 1]?.endsWith?.("%")
                                ? Dinosaur.productRating.count[i - 1]
                                : `${(Dinosaur.productRating.count[i - 1] * 100) / totalForPercent
                                }%`
                            }">
              </div>
            </div>
            <div class="ui-8ks86m1u-count ui-1ycumaoq" count="${parseInt(
                                Dinosaur.productRating.count[i - 1]
                            )}" filter="-${i}">
              ${Dinosaur.productRating.realTotal == Dinosaur.productRating.total ||
                                Dinosaur.productRating.count[i - 1]?.endsWith?.("%")
                                ? Dinosaur.productRating.count[i - 1]
                                : Math.round(
                                    (parseInt(Dinosaur.productRating.count[i - 1]) * 100) /
                                    totalForPercent
                                ) + "%"
                            }
            </div>  
            `;
                }
                if (filtersType == "button") {
                    html += `<button type="button" ${Dinosaur.productRating.total > "0" ? "" : "disabled "
                        }class="ui-zs7en5hj" active filter="all">${Dinosaur.config.textAll
                        } (${Dinosaur.productRating.total})
    </button><button type="button" ${Dinosaur.productRating.totalWithMedia > 0 ? "" : "disabled "
                        }class="ui-zs7en5hj" filter="media">With photo/video (${Dinosaur.productRating.totalWithMedia
                        })</button>
    <br>${_html}`;
                } else {
                    html += `<div class="ui-2x4vqu58 ui-odnfsn0a">${_html}</div>`;
                }
            } else if (Dinosaur.config.showReviewButton) {
                html += `<span class="ui-kbm2ft92 ui-er7nmjbb" ui-qv6rlqls>${Dinosaur.config.textReviewButtonNone}</span>`;
            }
            html += "</div>";
            return html;
        },

        buildListPhotoVideo: ({ type }) => {
            if (
                Dinosaur.isFeaturedWidget ||
                !Dinosaur.config.showMediaList ||
                (Dinosaur.reviewsMedia && !Dinosaur.isUIPreview) && false
            )
                return "";
            let html = "";
            Object.keys(Dinosaur.reviewsWithMedia || {}).forEach((reviewId) => {
                Dinosaur.xssEscape(((Dinosaur.reviewsWithMedia[reviewId].images && Dinosaur.reviewsWithMedia[reviewId].images + ",") || "") + (Dinosaur.reviewsWithMedia[reviewId].videos || ""))
                    .split(",")
                    .map((src, index) => {
                        if (src.length) {
                            html += Dinosaur.buildMediaTag({
                                src,
                                reviewId: Dinosaur.reviewsWithMedia[reviewId].id,
                                isThumb: true,
                                type,
                                first: index == 0
                            });
                        }
                    });
            });
            return type == "streamlined"
                ? `<div class="ui-5a793kf1">
                    <div class="ui-ojqgrsai">${html}</div>
                    </div>`
                : ` <div class="ui-hl6w2maa">${html}</div>`;
        },
        buildReviewsHeader: () => {
            const termOfUse = Dinosaur.config.termOfUse ? `
      <a href="${Dinosaur.config.termOfUse.split("|")[0]}" class="ui-g4v1fu7z">
        <span>${Dinosaur.config.termOfUse.split("|")[1]}</span><span>?</span>
      </a>` : ``;
            const branding = "";
            if (
                !Dinosaur.isAllReviewsPage &&
                (!Dinosaur.config.showHeader ||
                    (Dinosaur.config.hideHeaderWhenNoReview &&
                        !(Dinosaur.productRating.total > "0")))
            ) {
                $(".ui-h9avr9oh").html(
                    !(Dinosaur.productRating.total > "0") ? "" : branding
                );
                return;
            }
            let html =
                (Dinosaur.config.showWidgetTitle &&
                    Dinosaur.config.textWidgetTitle?.length) ||
                    branding
                    ? `<div class="ui-ugxbef68"><${Dinosaur.config.titleTag || 'div class="ui-0b5o5pbr"'
                    } ui-qv6rlqls>${Dinosaur.config.showWidgetTitle ? Dinosaur.config.textWidgetTitle : ""
                    }${termOfUse}</${Dinosaur.config.titleTag || "div"}>${branding}</div>`
                    : "";
            ((Dinosaur.isAllReviewsPage && Dinosaur.config.allReviewsShowReviewsSummary) || (Dinosaur.isFeaturedWidget && Dinosaur.config.featuredShowReviewsCount)) &&
                (html += `${Dinosaur.config.sideBarShowReviewsCount ? `<div class="dinosaur-reviews-summary">${Dinosaur.buildStarRating(Dinosaur.shopSummary.rating)}${Dinosaur?.shopSummary?.total > 1 ? 
                    `<div class="ui-e5ckh935">${Dinosaur.shopSummary.rating} ★ </div>
                    <span class="ui-0zclluae" ui-qv6rlqls>(${Dinosaur?.shopSummary?.total})</span>` : ""}
                    ${Dinosaur.config.showAmazonSignFeature ? Dinosaur.getSvg("amazon") : ``}
                </div>` : ``}`);
            let headerBox = "",
                actionButtons = "";
            const sortButton = `<button type="button" menu class="ui-r12oi0as">
      <div class="ui-s4v9z1mb" sort>
      <div class="ui-4y1q74zd" ui-qv6rlqls>${Dinosaur.config.textSortBy}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="date">${Dinosaur.config.textSortByTime}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="amazon">${Dinosaur.config.textSortAmazon}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="high">${Dinosaur.config.textSortByHigh}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="low">${Dinosaur.config.textSortByLow}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="photo">${Dinosaur.config.textSortByPhoto}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="liked">${Dinosaur.config.textSortHelpful}</div>
     </div></button>`;
            if (Dinosaur.isAllReviewsPage || Dinosaur.isFeaturedWidget) {
                if (Dinosaur.isAllReviewsPage) {
                    actionButtons =
                        (false
                            ? `<button type="button" menu review>
      <div class="ui-s4v9z1mb" filter-review>
        <div class="ui-4y1q74zd" ui-qv6rlqls>${Dinosaur.config.textReviews}</div>
        <div class="ui-ipyy50zg" ui-qv6rlqls review="all" rating="any" active>${Dinosaur.config.textAll}</div>
        <div class="ui-pmopbf4y"></div>
        <div style="display: flex">
          <div>
            <div class="ui-ipyy50zg" review="all" rating="5">5⭐</div>
            <div class="ui-ipyy50zg" review="all" rating="4">4⭐</div>
            <div class="ui-ipyy50zg" review="all" rating="3">3⭐</div>
            <div class="ui-ipyy50zg" review="all" rating="2">2⭐</div>
            <div class="ui-ipyy50zg" review="all" rating="1">1⭐</div>
          </div>
          <div style="border-left:1px solid #e0e0e0;padding-left:10px;margin:5px 0 0 20px">
            <div class="ui-ipyy50zg" ui-qv6rlqls review="all" rating="positive">${Dinosaur.config.textPositive}</div>
            <div class="ui-ipyy50zg" ui-qv6rlqls review="all" rating="negative">${Dinosaur.config.textNegative}</div>
            <div class="ui-pmopbf4y"></div>
            <div class="ui-ipyy50zg" ui-qv6rlqls review="media" rating="any">${Dinosaur.config.textPhotoVideo}</div>
            <div class="ui-ipyy50zg" ui-qv6rlqls review="verified" rating="any">${Dinosaur.config.textVerified}</div>
          </div>
        </div>
      </div><span ui-qv6rlqls>${Dinosaur.config.textReviews}</span><span class="ui-fjgiz3hn" ui-qv6rlqls></span></button>`
                            : "") +
                        (Dinosaur.config.allReviewsAllowSorting
                            ? `<button type="button" menu sort>
      <div class="ui-s4v9z1mb" sort>
      <div class="ui-4y1q74zd" ui-qv6rlqls>${Dinosaur.config.textSortBy}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="date">${Dinosaur.config.textSortByTime}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="amazon">${Dinosaur.config.textSortAmazon}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="high">${Dinosaur.config.textSortByHigh}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="low">${Dinosaur.config.textSortByLow}</div>
      <div class="ui-ipyy50zg" ui-qv6rlqls sort="photo">${Dinosaur.config.textSortByPhoto}</div>
    <div class="ui-ipyy50zg" ui-qv6rlqls sort="liked">${Dinosaur.config.textSortHelpful}</div>
     </div><span class="ui-fjgiz3hn" ui-qv6rlqls></span></button>`
                            : "");
                }
            } else {
                (Dinosaur.config.showAmazonButton || Dinosaur.config.showReviewButton || true) && (
                    actionButtons += `<div class="ui-63sharny">
                        ${Dinosaur.config.showReviewButton ? `<button type="button" class="ui-bj6l6u41" ui-qv6rlqls>${Dinosaur.getSvg("write", "var(--dinosaur-action-button-color)")}${Dinosaur.config.textReviewButton}</button>` : ``}
                        ${Dinosaur.config.showAmazonButton ? `<button  onclick="window.open('${Dinosaur.amzURL}', '_blank')" type="button" class="ui-bj6l6u41 amazon" ui-qv6rlqls>${Dinosaur.getSvg("", "var(--dinosaur-button-amazon-color)")}${`View amazon`}</button>` : ``}
                    </div>`
                )
                Dinosaur.config.allowSortReview &&
                    Dinosaur.productRating.total > "0" &&
                    Dinosaur.config.showBody &&
                    (actionButtons += sortButton);
                if (Dinosaur.config.showAverageRating) {
                    if (Dinosaur.productRating.total > "0") {
                        headerBox += `<span class="ui-qz4shmht">
                        ${Dinosaur.config.ratingSummaryType == "compact" ? `<span class="ui-g67zesby">${Dinosaur.productRating.average}</span>
                        ${Dinosaur.buildStarRating(Dinosaur.productRating.average)}`
                                : `<div class="ui-op0m1srw">
                            ${Dinosaur.buildStarRating(Dinosaur.productRating.average)}<span class="ui-q2bg5x8n">${Dinosaur.productRating.average} out of 5</span>
                        </div>`}
        <span class="ui-0e16tkr2" ui-qv6rlqls>${Dinosaur.config.textReviewSummary
                                .replace(/{{count}}/g, Dinosaur.productRating.total)
                                .replace(/{{review_number}}/g, Dinosaur.productRating.total)
                                .replace(/{{reviews_count}}/g, Dinosaur.productRating.total)
                                .replace(
                                    "{{reviews}}",
                                    (typeof Dinosaur.productRating.total == "string" ? Dinosaur.productRating.total.replace(/[.,]/g, "") * 1 : Dinosaur.productRating.total) < 2
                                        ? Dinosaur.config.textReview
                                        : Dinosaur.config.textReviews
                                )
                                .replace(/#rating/g, Dinosaur.productRating.average)}</span></span>`;
                    } else if (actionButtons?.trim().length)
                        headerBox += Dinosaur.buildStarRating(0);
                };
                const showDiving = Dinosaur.config.albumType == "streamlined"
                    && Object.keys(Dinosaur.reviewsWithMedia)?.length > 0
                    && Dinosaur.config.showAverageRating
                    && Dinosaur.config.showReviewFilters
                    && Dinosaur.config.showReviewButton
                showDiving && (headerBox += `<div class="ui-6z4xsiyc"></div>`)
                headerBox += Dinosaur.buildFilterBox();
                showDiving && (headerBox += `<div class="ui-6z4xsiyc"></div>`)
                Dinosaur.config.albumType == "streamlined" && Object.keys(Dinosaur.reviewsWithMedia)?.length > 0 && (headerBox += Dinosaur.buildListPhotoVideo({ type: "streamlined" }));
            }
            actionButtons && !(Dinosaur.isAllReviewsPage && !Dinosaur.config.allReviewsAllowFilters) &&
                (headerBox += `<div class="ui-xqawfgtj">${actionButtons}</div>`);
            headerBox && (html += `<div class="ui-pt0buz8w">${headerBox}</div>`);
            Dinosaur.config.albumType == "professional" && (html += Dinosaur.buildListPhotoVideo({ type: "professional" }));
            $(".ui-h9avr9oh").html(html);
            $(`.ui-ipyy50zg[sort="${Dinosaur.config.defaultSortReviewBy}"]`).attr("active", "");

            $(
                '.ui-zs7en5hj, .ui-8ks86m1u, .ui-8ks86m1u-count:not([count="0"]), .ui-ipyy50zg'
            ).click(function () {
                const sort = $(this).attr("sort"),
                    filter = $(this).attr("filter"),
                    review = $(this).attr("review"),
                    rating = $(this).attr("rating");
                (filter || review || rating) &&
                    Dinosaur.filterReviews({ filter, review, rating });
                sort && Dinosaur.sortReviews(sort);
                if (this.className == "ui-ipyy50zg") {
                    $(this)
                        .closest(".ui-s4v9z1mb")
                        .find(".ui-ipyy50zg[active]")
                        .removeAttr("active");
                    $(this)
                        .attr("active", "")
                        .closest("button[menu]")
                        .find(".ui-fjgiz3hn")
                        .html($(this).html());
                }
            });

            $(".ui-xqawfgtj button[menu]")
                .click(function (event) {
                    const menu = $(this).children(".ui-s4v9z1mb")[0];
                    $(".ui-s4v9z1mb:visible").each(function () {
                        if (this != menu) $(this).hide("fast");
                    });
                    event.stopPropagation();
                    $(menu).toggle("fast");
                    if (!Dinosaur.clickOutSortMenu) {
                        Dinosaur.clickOutSortMenu = function (e) {
                            var inside = e.target.closest(".ui-s4v9z1mb");
                            if (!inside) {
                                $(".ui-s4v9z1mb").hide("fast");
                            }
                        };
                        document.addEventListener("click", Dinosaur.clickOutSortMenu);
                    }
                })
                .each(function () {
                    const value = $(this).find(".ui-ipyy50zg[active]").html();
                    value && $(this).find(".ui-fjgiz3hn").html(value);
                });

            $(".ui-ojqgrsai .ui-jah04t9d:not([has-click]),.ui-hl6w2maa .ui-jah04t9d:not([has-click])")
                .attr("has-click", "")
                .click(function (e) {
                    Dinosaur.swiperReviews?.autoplay.stop();
                    Dinosaur.showImage(e.target, true);
                });

            $(".ui-bj6l6u41:not(.amazon), .ui-er7nmjbb").click(
                Dinosaur.showWriteReviewForm
            );
        },
        buildPreview: (previewConfig) => {
            Dinosaur.setConfig(previewConfig);
            Dinosaur.buildStyles(true);
            Dinosaur.buildReviewsHeader();
            Dinosaur.buildReviewsSection();

            if (Dinosaur.isUIPreview) return;
            Dinosaur.buildPagingSection();
            Dinosaur.widgetElement?.scrollIntoView({
                behavior: "smooth",
            });
        },

        exitPreview: () => {
            location.href = location.origin + location.pathname;
        },

        /* validateInput: return 1 -> fail, 0 -> ok */
        validateInput: (element, message, validator) => {
            const valid = !!(typeof validator == "function"
                ? validator()
                : validator === undefined
                    ? $(element).val()?.trim()
                    : validator);
            if (element == "rating") {
                $(".ui-7nc2shc5-notify").removeClass("rating-notify-alert");
                if (!valid) {
                    // Dinosaur.starsAnimation();
                    const value = $(
                        'input[name="ui-rchse7sz"]:checked'
                    ).val();
                    setTimeout(() => {
                        $(".ui-7nc2shc5-notify")
                            .html(
                                !value
                                    ? Dinosaur.config.textRating
                                    : ``
                            )
                            .addClass("rating-notify-alert");
                    });
                }
            } else {
                element = $(element)[0];
                !element.id &&
                    ((window.dinosaurInputGenerator =
                        (window.dinosaurInputGenerator || 0) + 1),
                        (element.id = `dinosaurInput_${window.dinosaurInputGenerator}`));
                const validateId = `validate_${element.id}`;
                $(element).removeClass("ui-n4xsrqxt");
                if (valid) {
                    $(`#${validateId}`).remove();
                } else if (message) {
                    if (!window[validateId]) {
                        $(
                            `<div id="${validateId}" class="ui-coymohez">${message}</div>`
                        ).insertAfter(element);
                        $(element).blur(function () {
                            Dinosaur.validateInput(this, "", validator);
                        });
                    }
                    setTimeout(() => {
                        $(element).addClass("ui-n4xsrqxt");
                    });
                }
            }
            return 1 - valid;
        },

        delay: async (ms) => {
            await new Promise((r) => setTimeout(r, ms));
        },

        getSvg: (type, color = "#000", width = "20px", height = "20px") => {
            return type == "amazon" ?
                `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px"
    y="0px" viewBox="0 0 122.879 111.709" enable-background="new 0 0 122.879 111.709" xml:space="preserve" width=${width} height=${height}>
    <g>
        <path
            d="M33.848,54.85c0-5.139,1.266-9.533,3.798-13.182c2.532-3.649,5.995-6.404,10.389-8.266 c4.021-1.713,8.974-2.941,14.858-3.687c2.01-0.223,5.287-0.521,9.83-0.894v-1.899c0-4.766-0.521-7.968-1.564-9.607 c-1.564-2.235-4.021-3.351-7.373-3.351h-0.893c-2.458,0.223-4.581,1.005-6.368,2.345c-1.787,1.341-2.942,3.202-3.463,5.586 c-0.298,1.489-1.042,2.345-2.234,2.569l-12.847-1.564c-1.266-0.298-1.899-0.968-1.899-2.011c0-0.223,0.037-0.484,0.111-0.781 c1.266-6.628,4.375-11.543,9.328-14.746C50.473,2.161,56.264,0.373,62.893,0h2.793c8.488,0,15.117,2.197,19.885,6.591 c0.746,0.748,1.438,1.55,2.066,2.401c0.631,0.856,1.135,1.62,1.506,2.29c0.373,0.67,0.709,1.639,1.006,2.904 c0.299,1.267,0.521,2.142,0.672,2.625c0.148,0.484,0.26,1.527,0.334,3.129c0.074,1.601,0.111,2.55,0.111,2.848v27.034 c0,1.936,0.279,3.705,0.838,5.306c0.559,1.602,1.1,2.756,1.619,3.463c0.521,0.707,1.379,1.844,2.57,3.406 c0.447,0.672,0.67,1.268,0.67,1.789c0,0.596-0.297,1.115-0.895,1.563c-6.18,5.363-9.531,8.268-10.053,8.715 c-0.893,0.67-1.973,0.744-3.24,0.223c-1.041-0.895-1.953-1.75-2.736-2.57c-0.781-0.818-1.34-1.414-1.676-1.787 c-0.334-0.371-0.875-1.098-1.619-2.178s-1.268-1.807-1.564-2.178c-4.17,4.543-8.266,7.373-12.287,8.49 c-2.533,0.744-5.661,1.117-9.384,1.117c-5.735,0-10.445-1.77-14.131-5.307C35.691,66.336,33.848,61.328,33.848,54.85L33.848,54.85z M53.062,52.615c0,2.905,0.727,5.232,2.178,6.982c1.453,1.75,3.407,2.625,5.865,2.625c0.224,0,0.54-0.037,0.95-0.111 c0.408-0.076,0.688-0.113,0.838-0.113c3.127-0.818,5.547-2.828,7.26-6.031c0.82-1.415,1.434-2.96,1.844-4.636 c0.41-1.675,0.633-3.035,0.67-4.078c0.037-1.042,0.057-2.755,0.057-5.138v-2.793c-4.32,0-7.596,0.298-9.83,0.894 C56.338,42.077,53.062,46.21,53.062,52.615L53.062,52.615z" />
        <path fill="#FF9900"
            d="M99.979,88.586c0.15-0.299,0.373-0.596,0.672-0.895c1.861-1.266,3.648-2.121,5.361-2.568 c2.83-0.744,5.586-1.154,8.266-1.229c0.746-0.076,1.453-0.037,2.123,0.111c3.352,0.297,5.361,0.857,6.033,1.676 c0.297,0.447,0.445,1.117,0.445,2.01v0.783c0,2.605-0.707,5.678-2.121,9.215c-1.416,3.537-3.389,6.387-5.922,8.547 c-0.371,0.297-0.707,0.445-1.004,0.445c-0.15,0-0.299-0.037-0.447-0.111c-0.447-0.223-0.559-0.633-0.336-1.229 c2.756-6.479,4.133-10.984,4.133-13.518c0-0.818-0.148-1.414-0.445-1.787c-0.746-0.893-2.83-1.34-6.256-1.34 c-1.268,0-2.756,0.074-4.469,0.223c-1.861,0.225-3.574,0.447-5.139,0.672c-0.447,0-0.744-0.076-0.895-0.225 c-0.148-0.148-0.186-0.297-0.111-0.447C99.867,88.846,99.904,88.734,99.979,88.586L99.979,88.586z M0.223,86.688 c0.373-0.596,0.968-0.633,1.788-0.113c18.618,10.799,38.875,16.199,60.769,16.199c14.598,0,29.008-2.719,43.232-8.156 c0.371-0.148,0.912-0.371,1.619-0.67c0.709-0.297,1.211-0.521,1.508-0.67c1.117-0.447,1.992-0.223,2.625,0.67 c0.635,0.895,0.43,1.713-0.613,2.457c-1.342,0.969-3.055,2.086-5.139,3.352c-6.404,3.799-13.555,6.74-21.449,8.826 c-7.893,2.086-15.602,3.127-23.123,3.127c-11.618,0-22.603-2.029-32.954-6.088C18.134,101.563,8.862,95.846,0.67,88.475 C0.223,88.102,0,87.729,0,87.357C0,87.133,0.074,86.91,0.223,86.688L0.223,86.688z" />
    </g>
</svg>`
                : type == "testomonial" ? `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width=${width} height=${height} version="1.1" id="_x32_" viewBox="0 0 512 512" xml:space="preserve">
<style type="text/css">
	.st0{fill:${color};}
</style>
<g>
	<path class="st0" d="M119.472,66.59C53.489,66.59,0,120.094,0,186.1c0,65.983,53.489,119.487,119.472,119.487   c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.135,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.829-6.389   c82.925-90.7,115.385-197.448,115.385-251.8C238.989,120.094,185.501,66.59,119.472,66.59z"/>
	<path class="st0" d="M392.482,66.59c-65.983,0-119.472,53.505-119.472,119.51c0,65.983,53.489,119.487,119.472,119.487   c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.136,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.828-6.389   C479.539,347.2,512,240.452,512,186.1C512,120.094,458.511,66.59,392.482,66.59z"/>
</g>
</svg>`
                    : type == "svgfull" ? `<svg xmlns="http://www.w3.org/2000/svg" height=${height} width=${width} viewBox="-0.658000000000003 -1.875 384.24600000000004 119.917"><path d="M81.633 27.542V64.65a2.268 2.268 0 0 1-2.268 2.268H67.651a2.269 2.269 0 0 1-2.268-2.268V4.292a2.268 2.268 0 0 1 2.268-2.268h10.84a2.268 2.268 0 0 1 2.268 2.268v8.5S84.634.667 96.134.667c0 0 11.375-1.375 16 11.25 0 0 3.875-11.25 15.625-11.25 0 0 17.474-1.039 17.474 17.042l.133 9.958v37.108a2.268 2.268 0 0 1-2.268 2.268h-11.715a2.269 2.269 0 0 1-2.268-2.268l-.107-40.483c.333-9.167-7.083-8.5-7.083-8.5-9.333.167-8.435 11.875-8.435 11.875v37.108a2.268 2.268 0 0 1-2.268 2.268H99.508a2.269 2.269 0 0 1-2.268-2.268V25.208s.685-9.5-7.649-9.5c.001 0-8.249-1.083-7.958 11.834zM383.588 27.431v37.107a2.269 2.269 0 0 1-2.268 2.268l-12.183.236a2.269 2.269 0 0 1-2.268-2.268V25.208s.685-9.5-7.648-9.5c0 0-7.959-.392-7.959 14.503v34.438a2.269 2.269 0 0 1-2.268 2.268h-11.715a2.269 2.269 0 0 1-2.268-2.268V4.292a2.269 2.269 0 0 1 2.268-2.268h10.84a2.268 2.268 0 0 1 2.268 2.268v8.5S354.262.667 365.762.667c0 0 12.319-1.869 16.468 11.015.001-.001 1.358 2.657 1.358 15.749zM299.008.417c-14.98 0-27.125 12.625-27.125 33.875 0 18.709 9.375 33.875 27.125 33.875 16.75 0 27.125-15.166 27.125-33.875 0-20.875-12.144-33.875-27.125-33.875zm9.455 34.625c0 8-1 12.25-1 12.25-1.423 8.457-7.562 8.469-8.467 8.424-.977.039-7.168-.049-8.449-8.424 0 0-1-4.25-1-12.25v-1.333c0-8 1-12.25 1-12.25 1.281-8.375 7.473-8.463 8.449-8.425.905-.045 7.044-.034 8.467 8.425 0 0 1 4.25 1 12.25zM265.084 12.708v-8.66a2.269 2.269 0 0 0-2.268-2.268h-38.72a2.268 2.268 0 0 0-2.268 2.268v8.593a2.269 2.269 0 0 0 2.268 2.268h20.197l-23.906 34.68s-.942 1.406-.911 2.959v10.549s-.156 3.617 3.946 1.518c0 0 7.286-4.402 19.503-4.402 0 0 12.065-.15 20.109 4.781 0 0 3.339 1.518 3.339-1.82v-9.182s.303-2.43-2.884-3.947c0 0-9.258-5.084-21.399-4.25zM56.342 56.124l-3.667-5.582c-1.167-2.084-1.083-4.418-1.083-4.418V20.375C52.092-1.875 27.425.042 27.425.042 5.497.042 2.258 17.107 2.258 17.107c-.914 3.431 1.744 3.514 1.744 3.514l10.715 1.087s1.827.418 2.492-1.757c0 0 1.411-7.445 9.302-7.445 8.586 0 8.497 7.369 8.497 7.369v6.169c-17.14.573-25.083 5.331-25.083 5.331-10.583 6-9.917 17.917-9.917 17.917 0 19.416 18.5 18.582 18.5 18.582 11.833 0 18.833-8.666 18.833-8.666 2.083 3.668 5.917 7.166 5.917 7.166 1.918 2.08 3.917.334 3.917.334l8.667-7.416c1.916-1.418.5-3.168.5-3.168zm-32.059-.24c-5.566 0-7.635-5.531-6.711-10.967.925-5.436 5.729-9.708 17.437-9.583v3.305c.415 14.438-6.093 17.245-10.726 17.245zM212.008 56.124l-3.666-5.582c-1.167-2.084-1.084-4.418-1.084-4.418V20.375c.5-22.25-24.167-20.333-24.167-20.333-21.928 0-25.167 17.065-25.167 17.065-.914 3.431 1.744 3.514 1.744 3.514l10.715 1.087s1.827.418 2.492-1.757c0 0 1.411-7.445 9.302-7.445 8.586 0 8.497 7.369 8.497 7.369v6.169c-17.139.573-25.083 5.331-25.083 5.331-10.583 6-9.917 17.917-9.917 17.917 0 19.416 18.5 18.582 18.5 18.582 11.833 0 18.833-8.666 18.833-8.666 2.084 3.668 5.916 7.166 5.916 7.166 1.918 2.08 3.918.334 3.918.334l8.666-7.416c1.917-1.418.501-3.168.501-3.168zm-32.059-.24c-5.566 0-7.635-5.531-6.711-10.967.925-5.436 5.729-9.708 17.436-9.583v3.305c.416 14.438-6.091 17.245-10.725 17.245z"/><g fill="#f3971b"><path d="M241.504 104.862s-.98 1.705.224 2.086c0 0 1.36.531 3.056-1.043 0 0 12.369-10.805 12.667-30.477 0 0 .091-2.457-.895-3.129 0 0-3.875-3.428-17.809-2.385 0 0-12.146.82-18.777 6.707 0 0-.596.521-.596 1.191 0 0-.143 1.447 3.502.82 0 0 12.145-1.715 19.373-.82 0 0 3.727.447 4.77 1.715 0 0 1.714 1.416.819 6.109 0 .002-2.46 11.924-6.334 19.226z"/><path d="M239.055 85.989s1.814 2.35-1.113 4.377c0 0-31.267 25.01-83.767 25.01 0 0-54.042 2.666-99.167-38.334 0 0-1.582-1.389-.6-2.68 0 0 .878-1.188 3.151.104 0 0 42.449 26.451 98.199 26.451 0 0 38.75 1.5 78.5-15.5 0 0 3.167-1.641 4.797.572z"/></g></svg>`
                        : type == "write" ? `<svg xmlns="http://www.w3.org/2000/svg" width=${width} height=${height} viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.186 2.09c.521.25 1.136.612 1.625 1.101.49.49.852 1.104 1.1 1.625.313.654.11 1.408-.401 1.92l-7.214 7.213c-.31.31-.688.541-1.105.675l-4.222 1.353a.75.75 0 0 1-.943-.944l1.353-4.221a2.75 2.75 0 0 1 .674-1.105l7.214-7.214c.512-.512 1.266-.714 1.92-.402zm.211 2.516a3.608 3.608 0 0 0-.828-.586l-6.994 6.994a1.002 1.002 0 0 0-.178.241L9.9 14.102l2.846-1.496c.09-.047.171-.107.242-.178l6.994-6.994a3.61 3.61 0 0 0-.586-.828zM4.999 5.5A.5.5 0 0 1 5.47 5l5.53.005a1 1 0 0 0 0-2L5.5 3A2.5 2.5 0 0 0 3 5.5v12.577c0 .76.082 1.185.319 1.627.224.419.558.754.977.978.442.236.866.318 1.627.318h12.154c.76 0 1.185-.082 1.627-.318.42-.224.754-.559.978-.978.236-.442.318-.866.318-1.627V13a1 1 0 1 0-2 0v5.077c0 .459-.021.571-.082.684a.364.364 0 0 1-.157.157c-.113.06-.225.082-.684.082H5.923c-.459 0-.57-.022-.684-.082a.363.363 0 0 1-.157-.157c-.06-.113-.082-.225-.082-.684V5.5z" fill=${color} /></svg>`
                            : type == "upload" ? `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" width=${width} height=${height} viewBox="0 -2 30 30" version="1.1">
    
    <title>upload</title>
    <desc>Created with Sketch Beta.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
        <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-569.000000, -674.000000)" fill=${color}>
            <path d="M579.732,681.7 L583,677.74 L583,691.998 C583,692.552 583.447,693 584,693 C584.553,693 585,692.552 585,691.998 L585,677.702 L588.299,681.7 C588.69,682.095 589.326,682.095 589.719,681.7 C590.11,681.307 590.11,680.668 589.719,680.274 L584.776,674.283 C584.566,674.073 584.289,673.983 584.016,673.998 C583.742,673.983 583.465,674.073 583.256,674.283 L578.313,680.274 C577.921,680.668 577.921,681.307 578.313,681.7 C578.705,682.095 579.341,682.095 579.732,681.7 L579.732,681.7 Z M598,690 C597.447,690 597,690.448 597,691 L597,698 L571,698 L571,691 C571,690.448 570.553,690 570,690 C569.447,690 569,690.448 569,691 L569,699 C569,699.553 569.447,700 570,700 L598,700 C598.553,700 599,699.553 599,699 L599,691 C599,690.448 598.553,690 598,690 L598,690 Z" id="upload" sketch:type="MSShapeGroup">

</path>
        </g>
    </g>
</svg>` 
                                : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill=${color} version="1.1" id="Capa_1" width=${width} height=${height} viewBox="0 0 35.418 35.418" xml:space="preserve"><g>
	<path d="M20.948,9.891c-0.857,0.068-1.847,0.136-2.837,0.269c-1.516,0.195-3.032,0.461-4.284,1.053   c-2.439,0.994-4.088,3.105-4.088,6.209c0,3.898,2.506,5.875,5.669,5.875c1.057,0,1.913-0.129,2.703-0.328   c1.255-0.396,2.31-1.123,3.562-2.441c0.727,0.99,0.923,1.453,2.177,2.509c0.329,0.133,0.658,0.133,0.922-0.066   c0.791-0.659,2.174-1.848,2.901-2.508c0.328-0.267,0.263-0.66,0.066-0.992c-0.727-0.924-1.45-1.718-1.45-3.498v-5.943   c0-2.513,0.195-4.822-1.647-6.537c-1.518-1.391-3.891-1.916-5.735-1.916c-0.264,0-0.527,0-0.792,0   c-3.362,0.197-6.921,1.647-7.714,5.811c-0.13,0.525,0.267,0.726,0.53,0.793l3.691,0.464c0.396-0.07,0.593-0.398,0.658-0.73   c0.333-1.449,1.518-2.176,2.836-2.309c0.067,0,0.133,0,0.265,0c0.79,0,1.646,0.332,2.109,0.987   c0.523,0.795,0.461,1.853,0.461,2.775L20.948,9.891L20.948,9.891z M20.223,17.749c-0.461,0.925-1.253,1.519-2.11,1.718   c-0.131,0-0.327,0.068-0.526,0.068c-1.45,0-2.31-1.123-2.31-2.775c0-2.11,1.254-3.104,2.836-3.565   c0.857-0.197,1.847-0.265,2.836-0.265v0.793C20.948,15.243,21.01,16.43,20.223,17.749z M35.418,26.918v0.215   c-0.035,1.291-0.716,3.768-2.328,5.131c-0.322,0.25-0.645,0.107-0.503-0.254c0.469-1.145,1.541-3.803,1.04-4.412   c-0.355-0.465-1.826-0.43-3.079-0.322c-0.572,0.072-1.075,0.105-1.469,0.183c-0.357,0.033-0.431-0.287-0.071-0.537   c0.466-0.323,0.969-0.573,1.541-0.756c2.039-0.608,4.406-0.25,4.729,0.146C35.348,26.414,35.418,26.629,35.418,26.918z    M32.016,29.428c-0.466,0.357-0.965,0.682-1.468,0.973c-3.761,2.261-8.631,3.441-12.856,3.441c-6.807,0-12.895-2.512-17.514-6.709   c-0.396-0.324-0.073-0.789,0.393-0.539C5.549,29.5,11.709,31.26,18.084,31.26c4.013,0,8.342-0.754,12.463-2.371   c0.285-0.104,0.608-0.252,0.895-0.356C32.087,28.242,32.661,28.965,32.016,29.428z"/>
</g>
</svg>`;
        },
        generateAvatarName: (fullName) => {
            const initials = fullName
                .split(' ')
                .map(word => word[0].toUpperCase())
                .slice(0, 2)
                .join('');
            return initials;
        },
        buildReviewForm: () => {
            $(Dinosaur.container).append(Dinosaur.formHtml());
            const $buttonSelectMedia = $(".ui-x6o4bhm5");
            const MAX_MEDIA_ITEMS = 5;
            const MAX_UPLOAD_VIDEO_SIZE = 20 * 1024 * 1024; //20MB
            const MAX_UPLOAD_IMAGE_SIZE = 4 * 1024 * 1024; //4MB

            async function onSubmitReview(event) {
                event?.preventDefault?.();

                let fail = 0;
                fail += Dinosaur.validateInput(
                    "rating",
                    "",
                    () => !!$('input[name="ui-rchse7sz"]:checked').val()
                );
                fail += Dinosaur.validateInput(
                    "#ui-ylyu2yis",
                    Dinosaur.config.textValidationContent
                );
                if (!Dinosaur.reviewRequestId) {
                    fail +=
                        Dinosaur.validateInput(
                            "#ui-48uazgoi",
                            Dinosaur.config.textValidationName
                        ) +
                        Dinosaur.validateInput(
                            "#ui-g0nqdpen",
                            Dinosaur.config.textValidationEmail,
                            () =>
                                !!$("#ui-g0nqdpen").val()?.trim() &&
                                !!$("#ui-g0nqdpen")
                                    .val()
                                    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
                        );
                }

                if (fail) return;

                $(".ui-ehvjvjix").html(`<svg viewBox="0 0 50 50" style="width:30px;height:30px;fill: currentColor">
                  <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                    <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.8" repeatCount="indefinite"></animateTransform>
                  </path>
                </svg>`);
                $(".ui-l057676x").css({ "pointer-events": "none" });

                let isReviewSuccess;
                if (Dinosaur.isUIPreview) {
                    //simulate submit review
                    await Dinosaur.delay(1000);
                    isReviewSuccess = true;
                } else {
                    //Upload files
                    let uploadSuccess = true;
                    let media = [];
                    await Promise.all(
                        Dinosaur.uploadFiles.map(async (file) => {
                            if (!uploadSuccess) return;
                            const { presignedPUTURL, uploadId } = await Dinosaur.doFetch({
                                url: `/apps/dino/upload-media?filename=${file.name}&filetype=${file.type}&product=${Dinosaur.data.productId}`,
                                method: "GET",
                            });

                            const resUpload = await fetch(presignedPUTURL, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": file.type,
                                    "x-amz-acl": "public-read",
                                },
                                body: file,
                            });
                            if (resUpload.ok) {
                                const url = new URL(presignedPUTURL);
                                media.push(url.origin + url.pathname);
                            } else {
                                uploadSuccess = false;
                            }
                        })
                    );

                    if (!uploadSuccess) {
                        Dinosaur.showMessage(
                            Dinosaur.config.textUploadMediaFailed ||
                            "Could not upload photo/video."
                        );
                        return;
                    }

                    const result = await submitReview(media);
                    isReviewSuccess = result.status == 200;
                }
                const resultMessage = isReviewSuccess
                    ? Dinosaur.config.textReviewSuccess
                    : Dinosaur.config.textReviewFailed;
                Dinosaur.showMessage({
                    message: resultMessage,
                    onAction: () => {
                        if (Dinosaur.reviewRequestId) {
                            window.location.href = window.location.href.split("?")[0];
                        }
                    },
                });
                if (isReviewSuccess) {
                    $(".ui-b0wqidag").remove();
                    //reset values
                    $(".ui-l057676x input:checked").prop("checked", false);
                    $(".ui-l057676x [type=text]").val("");

                    Dinosaur.resetReviewRating();
                    Dinosaur.uploadFiles = [];
                    Dinosaur.hideWriteReviewForm();
                }
            }

            async function submitReview(media) {
                return await Dinosaur.doFetch({
                    url: "/apps/dino/submit-review",
                    data: {
                        productId: "" + Dinosaur.data.productId,
                        rating: $('input[name="ui-rchse7sz"]:checked').val(),
                        author: $("#ui-48uazgoi").val(),
                        email: $("#ui-g0nqdpen").val(),
                        title: $("#ui-3847ly29").val(),
                        body: $("#ui-ylyu2yis").val(),
                        requestId: Dinosaur.reviewRequestId,
                        media,
                    },
                    readStream: false,
                });
            }

            $(".ui-s3tdjxqk .ui-36c8wcbw").click(
                Dinosaur.hideWriteReviewForm
            );

            //$(".ui-l057676x").submit(onSubmitReview);
            $(".ui-ehvjvjix").click(onSubmitReview);

            const uploadObj = $("#ui-fl9qz09w")[0];
            if (uploadObj)
                uploadObj.onchange = function () {
                    let issues = "";
                    for (let i = 0; i < this.files.length; i++) {
                        if (Dinosaur.uploadFiles.length >= MAX_MEDIA_ITEMS) {
                            issues = Dinosaur.config.textValidationLimitFiles.replace(
                                "##",
                                MAX_MEDIA_ITEMS
                            );
                            break;
                        }
                        const file = this.files[i];
                        const isImage = ["image/gif", "image/jpeg", "image/png", "image/apng", "image/svg", "image/webp"].includes(file.type),
                            isVideo = ["video/quicktime", "video/ogg", "video/webm", "video/mp4"].includes(file.type),
                            limitFileSize = isImage
                                ? MAX_UPLOAD_IMAGE_SIZE
                                : isVideo
                                    ? MAX_UPLOAD_VIDEO_SIZE
                                    : 0;
                        if (limitFileSize && file.size > limitFileSize) {
                            issues = `${file.name} - File size limit ${Math.round((limitFileSize * 10) / 1048576) / 10
                                }M exceeded (${Math.round((file.size * 10) / 1048576) / 10}M)`;
                            break;
                        }
                        if (isVideo) {
                            if (Dinosaur.hasVideoUploaded) {
                                issues = Dinosaur.config.textValidationLimitVideo;
                                break;
                            } else {
                                Dinosaur.hasVideoUploaded = true;
                                $('.ui-x6o4bhm5 input[type="file"]').attr(
                                    "accept",
                                    "image/jpeg,image/png,image/gif,image/webp"
                                );
                            }
                        }
                        if (isImage || isVideo) {
                            Dinosaur.uploadFiles.push(file);
                            const $removeButton = $(
                                '<div class="ui-g06vmuf4">'
                            );
                            $removeButton.click(function () {
                                const $mediaBox = $(this).parent();
                                Dinosaur.uploadFiles.splice($mediaBox.index(), 1);
                                $buttonSelectMedia.show();
                                $mediaBox.remove();
                                $(".ui-4qwazhpe").text(`${Dinosaur.uploadFiles.length}/5`)
                            });
                            $(".ui-4qwazhpe").text(`${Dinosaur.uploadFiles.length}/5`)
                            const $mediaContainer = $(".ui-740og1ut");
                            if (isImage) {
                                const $previewImage = $("<img>");
                                $previewImage.attr("src", URL.createObjectURL(file));
                                const item = $('<div class="ui-b0wqidag">')
                                    .append($previewImage)
                                    .append($removeButton);
                                    // .insertBefore($buttonSelectMedia);
                                $mediaContainer.append(item);
                            } else if (isVideo) {
                                const item = $('<div class="ui-b0wqidag">')
                                    .html('<div class="upload-video"></div>')
                                    .append($removeButton);
                                    // .insertBefore($buttonSelectMedia);
                                    $mediaContainer.append(item);
                            }
                        }
                    }
                    if (issues) Dinosaur.showMessage(issues);

                    Dinosaur.uploadFiles.length >= MAX_MEDIA_ITEMS &&
                        $buttonSelectMedia.hide();
                };

            $("input[type=radio][name=ui-rchse7sz]").change(function (
                event
            ) {
                const value = $(
                    'input[name="ui-rchse7sz"]:checked'
                ).val();
                value > 0 && (Dinosaur.stopStarsAnimation = true);
                $(".ui-7nc2shc5-notify")
                    .html(``)
                    .removeClass("rating-notify-alert");
                $('label[for="' + event.target.id + '"]').attr("active", "");
                setTimeout(
                    () => $('label[for="' + event.target.id + '"]').removeAttr("active"),
                    500
                );
            });
            Dinosaur.resetReviewRating();
        },

        buildProductReviews: () => {
            Dinosaur.buildReviewsHeader();
            //check empty first page reviews
            if (Dinosaur.productRating?.total > 0 && !Dinosaur.reviews?.length)
                Dinosaur.loadProductReviews({ page: 1, checkFirstPageReviews: true });
            else {
                Dinosaur.buildReviewsSection();
                Dinosaur.buildPagingSection();
            }
        },

        showRatingBadges: ($element) => {
            let selector = $element,
                majorTextAlign;
            if (!selector) {
                if (
                    !Dinosaur.config.badgeOnProductPage &&
                    !Dinosaur.config.badgeOnProductsList
                )
                    return 0;
                else if (
                    !Dinosaur.config.badgeOnProductPage &&
                    Dinosaur.config.badgeOnProductsList
                )
                    selector =
                        ".ui-bju4qg94:not([rendered]):not([data-id]):not(.ui-wlqwk85l)";
                else if (
                    Dinosaur.config.badgeOnProductPage &&
                    !Dinosaur.config.badgeOnProductsList
                )
                    selector = ".ui-wlqwk85l:not([rendered]):not([data-id])";
                else selector = ".ui-bju4qg94:not([rendered]):not([data-id])";
            }
            if ($element) {
                majorTextAlign =
                    Dinosaur.productTitleElement &&
                    window.getComputedStyle(Dinosaur.productTitleElement)?.textAlign;
            }
            let count = 0;
            $(selector).each(function () {
                const isMajor = $(this).hasClass("ui-wlqwk85l");
                const _raters =
                    (Dinosaur.config.useAmzSummary &&
                        $(this).data("raters") > 0 &&
                        $(this).data("amz_raters")) ||
                    $(this).data("raters") ||
                    0;
                const raters = parseInt(_raters),
                    cardProductId = $(this).data("id"),
                    ratingProductId = $(this).data("pid");
                if (
                    (isMajor && !Dinosaur.config.badgeOnProductPage) ||
                    (!isMajor && !Dinosaur.config.badgeOnProductsList) ||
                    (ratingProductId && cardProductId && ratingProductId != cardProductId)
                )
                    return;
                let rating =
                    (Dinosaur.config.useAmzSummary && $(this).data("amz_rating")) ||
                    $(this).data("rating") ||
                    "0.0";
                (rating + "").length == 1 && (rating += ".0");
                if ((Dinosaur.config.showEmptyStarNoReviewProduct && Dinosaur.isProductPage) ||
                    (Dinosaur.config.showEmptyStarNoReviewCollection && (Dinosaur.isCollectionPage || Dinosaur.isHomePage)) ||
                    raters > 0) {
                    let textAlign = majorTextAlign;
                    if (!textAlign) {
                        const c = window.getComputedStyle(this.parentElement);
                        textAlign = c.textAlign.includes("center") // may be "center" or -webkit-center
                            ? "center"
                            : c.textAlign.includes("right") && c.direction !== "rtl"
                                ? "right"
                                : "";
                    }
                    $(this)
                        .html(
                            `<div class="ui-gmp9sbz0">${raters &&
                                ((isMajor && Dinosaur.config.showRatingProductDetails) || (!isMajor && Dinosaur.config.showRatingProductList))
                                ? `<div class="ui-e5ckh935">${rating}</div>`
                                : ""
                            }
            ${Dinosaur.buildStarRating(rating)}${raters
                                ? `<div class="ui-y76sfldp" ui-qv6rlqls>${(isMajor ||
                                    Dinosaur.config.ratingSameFormat
                                    ? Dinosaur.config.ratingFormatProduct
                                    : Dinosaur.config.ratingFormatCollection
                                )
                                    .replace("{{count}}", _raters)
                                    .replace("{{review_number}}", _raters)
                                    .replace("{{reviews_count}}", _raters)
                                    .replace("{{rating_number}}", rating)
                                    .replace(
                                        "{{reviews}}",
                                        (typeof _raters == "string" ? _raters.replace(/[.,]/g, "") * 1 : raters) < 2
                                            ? Dinosaur.config.textReview
                                            : Dinosaur.config.textReviews
                                    )
                                }</div>`
                                : ""
                            }
                            ${raters &&
                                ((isMajor && Dinosaur.config.showAmazonProductDetails) || (!isMajor && Dinosaur.config.showAmazonProductList))
                                ? `${Dinosaur.getSvg("amazon")}`
                                : ""
                            }
                            </div>`
                        )
                        .attr("rendered", "");
                    textAlign && $(this).css("justify-content", textAlign);
                    count++;
                }
            });
            count && !Dinosaur.isBuilding && Dinosaur.translate();
            return count;
        },

        loadCSSJS: async (url, callback) => {
            let promise = new Promise((resolve, reject) => {
                Dinosaur.loadedFiles === undefined && (Dinosaur.loadedFiles = []);
                if (Dinosaur.loadedFiles.includes(url)) {
                    resolve(url + " loaded already");
                } else {
                    Dinosaur.loadedFiles.push(url);
                    const lcURL = new URL(url.toLowerCase());
                    if (lcURL.pathname.endsWith(".css")) {
                        const s = document.createElement("link");
                        s.rel = "stylesheet";
                        s.href = url;
                        s.onload = () => {
                            resolve(url + " loaded");
                        };
                        document.getElementsByTagName("head")[0].appendChild(s);
                    } else if (lcURL.pathname.endsWith(".js")) {
                        const s = document.createElement("script");
                        s.defer = "defer";
                        s.src = url;
                        s.onload = () => {
                            resolve(url + " loaded");
                        };
                        const a = document.getElementsByTagName("script")[0];
                        a.parentNode.insertBefore(s, a);
                    }
                }
            });
            let result = await promise;
            callback?.();
            Dinosaur.log(result);
            return result;
        },

        checkDinosaurReady: (action) => {
            if (
                true &&
                Dinosaur.config &&
                Dinosaur.jqueryLoaded
                //&& Dinosaur.swiperLoaded
                //&& Dinosaur.momentLoaded
            ) {
                Dinosaur.isReady = true;
                Dinosaur.log("checkDinosaurReady ok");
                action && action();
                return true;
            }
            return false;
        },

        showMessage: (info) => {
            let message, button, onAction, onShow, onHide, html;
            typeof info == "string"
                ? (message = info)
                : ({ message, button, onAction, onShow, onHide, html } = info);
            const msgBox = document.createElement("div");
            msgBox.className = "ui-8vy4sje1 ui-drz7nqpr";
            msgBox.style.zIndex = Dinosaur.zIndex;
            msgBox.innerHTML = `<div class="ui-6l10su3i">${message
                ? `<p class="ui-a3qcaz2k">${message.replace(
                    /\n/g,
                    "<br>"
                )}</p>${button == "_none"
                    ? ""
                    : `<button type="button" class="ui-wegtjz16">${button ?? "OK"
                    }</button>`
                }`
                : ""
                }${html ? `<i class="ui-36c8wcbw"></i>` : ""}</div>`;
            if (typeof html == "object") {
                msgBox.querySelector(".ui-6l10su3i")?.appendChild(html);
            } else html && msgBox.querySelector(".ui-6l10su3i")?.html(html);
            Dinosaur.container.appendChild(msgBox);
            const hideMsg = (action) =>
                Dinosaur.hideBackdropBox(".ui-8vy4sje1", () => {
                    msgBox.remove();
                    action?.();
                    onHide?.();
                });
            if (onAction) {
                msgBox
                    .querySelector(".ui-wegtjz16")
                    ?.addEventListener("click", () => hideMsg(onAction));
            } else
                html && !Dinosaur.config.hideMessageWhenClickOutside
                    ? msgBox
                        .querySelector(".ui-36c8wcbw")
                        ?.addEventListener("click", () => hideMsg())
                    : msgBox?.addEventListener("click", () => hideMsg());
            Dinosaur.showBackdropBox(".ui-8vy4sje1");
            onShow?.();
        },

        getUrlParams: () =>
            Dinosaur.urlParams === undefined &&
            (Dinosaur.urlParams = new Proxy(
                new URLSearchParams(window.location.search),
                {
                    get: (searchParams, prop) => searchParams.get(prop),
                }
            )),

        checkParams: () => {
            Dinosaur.getUrlParams();
            if (Dinosaur.urlParams.review == "edit") {
                Dinosaur.pendingAction = () => Dinosaur.showWriteReviewForm(true);
            }
            if (Dinosaur.urlParams.token?.length == 36 && !window.process_token) {
                window.process_token = true;
                Dinosaur.reviewRequestId = Dinosaur.urlParams.token;
                Dinosaur.pendingAction = () => {
                    Dinosaur.showWriteReviewForm(true);
                    $(".ui-9s039zv2").hide();
                };
            }
            if (Dinosaur.urlParams.verified && !window.process_verified) {
                window.process_verified = true;
                Dinosaur.showMessage(
                    "You are successfully verified.\nYour review will be showed up here soon."
                );
                window.history.pushState({}, "", window.location.href.split("?")[0]);
            }
            if (
                Dinosaur.urlParams.preview &&
                Dinosaur.isReady &&
                !window.processedPreview
            ) {
                window.processedPreview = true;
                Dinosaur.buildPreview(
                    JSON.parse(atob(decodeURIComponent(Dinosaur.urlParams.preview)))
                );
            }
        },

        log: (s) => {
            Dinosaur.enableLogs && console.log(new Date().toISOString() + " " + s);
        },

        loadJQuery: async (callback) => {
            const loadedJQuery = () => {
                Dinosaur.jqueryLoaded = true;
                typeof $ == "undefined" && ($ = jQuery.noConflict());
                Dinosaur.log("jQuery loaded");
                callback?.();
            };
            if (Dinosaur.config.waitForJquery > 0) {
                let t = 0;
                while (t < Dinosaur.config.waitForJquery && typeof jQuery == "undefined") {
                    await Dinosaur.delay(100);
                    t += 100;
                }
            }
            if (typeof jQuery == "undefined") {
                await Dinosaur.loadCSSJS(
                    "https://code.jquery.com/jquery-3.7.1.min.js",
                    loadedJQuery
                );
            } else {
                loadedJQuery();
            }
        },
        swiperMediaEvent: (swiper) => {
            Dinosaur.timeoutSwiperMediaChanged &&
                clearTimeout(Dinosaur.timeoutSwiperMediaChanged);
            Dinosaur.timeoutSwiperMediaChanged = setTimeout(() => {
                Dinosaur.stopAllVideo();
                if (Dinosaur.config.showMediaList && Dinosaur.reviewsWithMedia) {
                    const review =
                        Dinosaur.reviewsWithMedia[
                        $(swiper.slides[swiper.activeIndex])
                            .find("img,video")
                            .attr("reviewId")
                        ];
                    if (review) {
                        $(".ui-52vpii9y")
                            .html(
                                `<div class="ui-dtskm1x0">
                                    ${review.rating}★&nbsp;
                                    <div class="ui-9dp1jl2h">${Dinosaur.xssEscape(review.customer)}</div>
                                </div>
                                <div class="ui-b0cv1vjg">
                                    <div>${Dinosaur.xssEscape(review.title)}</div>
                                    <div>${review.body}</div>
                                </div>`
                            )
                            .show();
                    } else $(".ui-52vpii9y").hide().html("");
                }
            }, 100);
        },
        loadSwiper: async (callback) => {
            if (Dinosaur.swiperLoaded) return;
            const loadedSwiper = () => {
                Dinosaur.swiperLoaded = true;
                //image display using swiper
                if (Dinosaur.swiperMedia === undefined) {
                    const $imgBox =
                        $(`<div id="ui-4m0xgc2u" class="ui-drz7nqpr" style="z-index:${Dinosaur.zIndex
                            }">
  <div class="ui-fap2x9mx">
    <div class="swiper-wrapper"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>${Dinosaur.config.albumType
                                ? `<div class="ui-52vpii9y"></div>`
                                : ""
                            }
  <i class="ui-36c8wcbw"></i>
</div>`);
                    $(Dinosaur.container).append($imgBox);
                    $imgBox.find(".ui-36c8wcbw").click(() => {
                        Dinosaur.config.widgetLayout == "slide" &&
                        Dinosaur.swiperReviews.autoplay.start();
                        Dinosaur.stopAllVideo();
                        Dinosaur.hideBackdropBox("#ui-4m0xgc2u");
                    });
                    $(".ui-52vpii9y").click(function () {
                        $(this).attr("small") == undefined
                            ? $(this).attr("small", "")
                            : $(this).removeAttr("small");
                    });
                    Dinosaur.swiperMedia = new Swiper(".ui-fap2x9mx", {
                        zoom: true,
                        navigation: {
                            nextEl: ".swiper-button-next",
                            prevEl: ".swiper-button-prev",
                        },
                        pagination: {
                            el: ".swiper-pagination",
                            clickable: true,
                        },
                        keyboard: {
                            enabled: true,
                        },
                        on: {
                            update: (swiper) => Dinosaur.swiperMediaEvent(swiper),
                            transitionStart: (swiper) => Dinosaur.swiperMediaEvent(swiper),
                            keyPress: (swiper, keyCode) => {
                                switch (keyCode) {
                                    case 38:
                                        swiper.slidePrev();
                                        break;
                                    case 40:
                                        swiper.slideNext();
                                        break;
                                    case 27:
                                        Dinosaur.stopAllVideo();
                                        Dinosaur.hideBackdropBox("#ui-4m0xgc2u");
                                        break;
                                }
                            },
                        },
                    });
                }
                Dinosaur.log("Swiper loaded");
                Dinosaur.swiperLoadedPending?.();
                callback?.();
            };

            if (typeof Swiper == "undefined") {
                Dinosaur.loadCSSJS(
                    "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
                );
                Dinosaur.loadCSSJS(
                    "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js",
                    loadedSwiper
                );
            } else {
                const hasSwiperCss = !!getComputedStyle(
                    document.querySelector(":root")
                )?.getPropertyValue("--swiper-theme-color");
                !hasSwiperCss &&
                    Dinosaur.loadCSSJS(
                        "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
                    );
                loadedSwiper();
            }
        },

        loadMoment: async (callback) => {
            if (Dinosaur.momentLoaded) return;
            const loadedMoment = () => {
                Dinosaur.momentLoaded = true;
                Dinosaur.log("Moment loaded");
                Dinosaur.formatDatePending?.();
                callback?.();
            };
            if (typeof moment == "undefined") {
                await Dinosaur.loadCSSJS(
                    "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.4/moment.min.js",
                    loadedMoment
                );
            } else {
                loadedMoment();
            }
        },

        loadLazyLoad: async (callback) => {
            if (Dinosaur.lazyLoadLoaded) return;
            const loadedLazyLoad = () => {
                Dinosaur.lazyLoadLoaded = true;
                Dinosaur.log("Lazy load loaded");
                Dinosaur.lazyLoadedPending?.();
                callback?.();
            };
            if (typeof LazyLoad == "undefined") {
                await Dinosaur.loadCSSJS(
                    "https://cdn.jsdelivr.net/npm/vanilla-lazyload@17.8.4/dist/lazyload.min.js",
                    loadedLazyLoad
                );
            } else {
                loadedLazyLoad();
            }
        },

        init: async ({ action, data }) => {
            if (Dinosaur.isReady && !Dinosaur.isUIPreview) {
                return;
            }
            Dinosaur.container = data?.parent
                ? document.querySelector(data.parent)
                : document.body;
            if (!Dinosaur.container) return;
            Dinosaur.setConfig(data?.config || window._dinosaurConfig);
            Dinosaur.subscriptionPlan =
                (
                    data?.subscriptionPlan ||
                    {
                        "3.0": "Free",
                        3.1: "Essential",
                        3.2: "Premium",
                        3.3: "VIP",
                    }[window._dinosaurSub ?? "3.0"]
                )?.split("/")[0] || "Free";
            Dinosaur.isFreePlan = Dinosaur.subscriptionPlan == "Free";
            Dinosaur.isEssentialPlan = Dinosaur.subscriptionPlan == "Essential";
            Dinosaur.isPremiumPlan = Dinosaur.subscriptionPlan == "Premium";
            Dinosaur.isVIPPlan = Dinosaur.subscriptionPlan == "VIP";
            Dinosaur.limitReviews = Dinosaur.config.limitReviews || 10000;
            Dinosaur.limitPhoto = Dinosaur.config.limitPhoto;
            const _check =
                !!window._dinosaurCheckInstall &&
                window._dinosaurCheckInstall / 3 + +new Date("2020-02-20"),
                newVIPPlan = _check > +new Date("2024-01-01"),
                newEssPlan = _check > +new Date("2024-05-20");
            !Dinosaur.config.limitReviews &&
                newVIPPlan &&
                (Dinosaur.limitReviews = Dinosaur.isVIPPlan
                    ? 10000
                    : Dinosaur.isPremiumPlan
                        ? 500
                        : 20);
            !Dinosaur.config.limitPhoto &&
                (Dinosaur.limitPhoto = Dinosaur.isVIPPlan
                    ? 50
                    : Dinosaur.isPremiumPlan
                        ? 10
                        : 1);
            Dinosaur.pageType =
                data?.pageType ||
                window._dinosaurPageType ||
                window.ShopifyAnalytics?.meta?.page?.pageType;
            if (Dinosaur?.config?.allowLoadScript && !Dinosaur?.config?.allowLoadScript?.split(",")?.includes(Dinosaur.pageType)) return;
            Dinosaur.pageType == "index" &&
                location.href.includes("/products/") &&
                (Dinosaur.pageType = "product");
            Dinosaur.isHomePage = Dinosaur.pageType == "index";
            Dinosaur.isProductPage = Dinosaur.pageType == "product";
            Dinosaur.isCollectionPage = Dinosaur.pageType == "collection";
            Dinosaur.isSearchPage = Dinosaur.pageType == "search";
            Dinosaur.isCustomPage = Dinosaur.pageType == "page";
            Dinosaur.isOtherPage =
                !Dinosaur.isHomePage &&
                !Dinosaur.isProductPage &&
                !Dinosaur.isCollectionPage &&
                !Dinosaur.isSearchPage;

            Dinosaur.data = data?.data || window._dinosaurProductData;
            Dinosaur.forceMobile = data?.isMobile;
            Dinosaur.showLogo =
                Dinosaur.isFreePlan &&
                !Dinosaur.config.allowedOptions?.includes("removeLogo");
            Dinosaur.reviewsWithMedia = data?.reviewsWithMedia || window._dinosaurReviewsWithMedia || {};
            Dinosaur.productRating = data?.summary || window._dinosaurRating || {};
            Dinosaur.ratings = window._dinosaurRatings;
            Dinosaur.popupReviews = window._dinosaurPopupReviews ?? [];
            Dinosaur.shopName = window._shopName ?? "Sample shop name";
            Dinosaur.amzURL = window._amzURL || "";
            Dinosaur.shopSummary = data?.shopSummary || (window._dinosaurShopSummary ? { rating: (Math.round(window._dinosaurShopSummary.rating * 10) / 10 || -1), total: window._dinosaurShopSummary.total } : {})
            const limitPopupReviews = Dinosaur.config.limitPopupReviews ??
                (Dinosaur.isVIPPlan ? 100 : Dinosaur.isPremiumPlan ? 10 : 2);
            limitPopupReviews < Dinosaur.popupReviews?.length && (
                Dinosaur.popupReviews = Dinosaur.popupReviews.slice(0, limitPopupReviews)
            );
            Dinosaur.productRating.realTotal =
                Dinosaur.productRating.realTotal ?? Dinosaur.productRating.total;
            Dinosaur.isFeaturedWidget =
                window._dinosaurFeaturedReviews ||
                (data?.isFeaturedWidget && data?.reviews);
            if (Dinosaur.isFeaturedWidget) {
                if (window._dinosaurFeaturedReviews) {
                    Dinosaur.featuredReviews = (window._dinosaurFeaturedReviews ?? [])
                        .map((_) => {
                            const order = Number(/\(\(([^)]+)\)/.exec(_.title)?.[1]); //((123))
                            _.order = isNaN(order) ? 0 : order;
                            _.isPinned = _.isPinned ?? 0;
                            return _;
                        })
                        .sort((a, b) => b.isPinned - a.isPinned || a.order - b.order);
                    Dinosaur.reviewsTotal = Dinosaur?.shopSummary?.total;
                } else {
                    Dinosaur.featuredReviews = data?.reviews;
                    Dinosaur.reviewsTotal = data?.reviews?.length;
                }
                const limitFeaturedReviews =
                    Dinosaur.config.limitFeaturedReviews ??
                    (Dinosaur.isVIPPlan ? 100 : Dinosaur.isPremiumPlan ? 10 : 2);
                limitFeaturedReviews < Dinosaur.featuredReviews.length &&
                    (Dinosaur.featuredReviews = Dinosaur.featuredReviews.slice(
                        0,
                        limitFeaturedReviews
                    ));
                Dinosaur.config.pageSize = Dinosaur.config.featuredPageSize ?? 10;
                Dinosaur.config.maxLines = Dinosaur.config.featuredMaxLines ?? 4;
                Dinosaur.config.widgetLayout = Dinosaur.config.featuredLayout ?? "carousel";
                Dinosaur.config.textWidgetTitle = Dinosaur.config.textFeaturedTitle;
                Dinosaur.config.showWidgetTitle =
                    !!Dinosaur.config.textWidgetTitle.trim()?.length;
                Dinosaur.productRating.total = Dinosaur.featuredReviews.length ?? 0;
                Dinosaur.config.showHeader = Dinosaur.productRating.total > 0;
                Dinosaur.config.showBody = true;
                Dinosaur.config.showReviewFilters = "";
                Dinosaur.config.showReply = Dinosaur.config.featuredShowReply ?? false;
                Dinosaur.config.showLikeReview = Dinosaur.config.featuredShowLike ?? false;
                Dinosaur.config.paginationType =
                    Dinosaur.config.featuredPaginationType ??
                    (Dinosaur.config.featuredShowPagination
                        ? Dinosaur.config.paginationType
                        : "none");
                Dinosaur.reviews = Dinosaur.featuredReviews;
            } else {
                Dinosaur.reviews = (data?.reviews || window._dinosaurReviews) ?? [];
            }
            Dinosaur.reviews = Dinosaur.reviews?.slice(0, Dinosaur.config.pageSize);

            setTimeout(() => {
                const scrollbarWidth =
                    window.innerWidth - document.documentElement.clientWidth;
                document
                    .querySelector(":root")
                    .style.setProperty("--dinosaur-scrollbar-width", `${scrollbarWidth}px`);
            });
            await Dinosaur.loadJQuery();
            Dinosaur.loadMoment();
            Dinosaur.loadSwiper();
            Dinosaur.loadLazyLoad();
            Dinosaur.checkDinosaurReady(action);
        },

        checkWidgetMargin: () => {
            //add padding if needed
            if (Dinosaur.widgetElement) {
                const computedStyle = getComputedStyle(Dinosaur.widgetElement);
                const widgetWidth =
                    Dinosaur.widgetElement.clientWidth -
                    parseFloat(computedStyle.paddingLeft) -
                    parseFloat(computedStyle.paddingRight),
                    containerWidth = document.documentElement.clientWidth;
                if ((containerWidth - widgetWidth) / containerWidth < 0.077) {
                    const padding = Math.round(containerWidth * 0.0385);
                    $(Dinosaur.widgetElement).css({
                        "padding-left": padding,
                        "padding-right": padding,
                    });
                }
            }
        },

        observeResizing: () => {
            const target = Dinosaur.widgetElement; //Dinosaur.container
            if (!Dinosaur.resizingObserver) {
                let last = target?.getBoundingClientRect();
                Dinosaur.resizingObserver = new ResizeObserver(() => {
                    const rect = target.getBoundingClientRect();
                    if (rect.width !== last?.width) {
                        if (Dinosaur.resizedAction) clearTimeout(Dinosaur.resizedAction);
                        Dinosaur.resizedAction = setTimeout(
                            () => {
                                Dinosaur.checkSizeChange(true);
                                Dinosaur.checkWidgetMargin();
                                Dinosaur.buildGrid();
                                Dinosaur.buildGrid(true); //for sidebar reviews
                            },
                            Dinosaur.isUIPreview ? 0 : 500
                        );
                    }
                    last = rect;
                });
            }
            if (target && Dinosaur.resizingObject != target) {
                Dinosaur.resizingObserver.observe(target);
                Dinosaur.resizingObject &&
                    Dinosaur.resizingObserver.unobserve(Dinosaur.resizingObject);
                Dinosaur.resizingObject = target;
            }
        },

        buildSidebar: () => {
            if (!Dinosaur.renderSidebar) {
                if (window._floatingActive) {
                    if (Dinosaur?.shopSummary?.total <= 0) return;
                    let $sidebar = $(".ui-ht9ncqjf");
                    if (!$sidebar.length) {
                        $sidebar = $(
                            `<div class="ui-ht9ncqjf"><div class="ui-9pkqz4ao" ui-qv6rlqls>${Dinosaur.config.tabStyle == "text"
                                ? Dinosaur.config.textSidebar
                                : Dinosaur.buildStarRating(Dinosaur?.shopSummary?.rating) + `<span style="transform: rotate(270deg);height:fit-content;font-weight:bold">${Dinosaur?.shopSummary?.rating}</span>`
                            }${(Dinosaur.config.showAmazonSignFloating ? `<div class="ui-sftuu1in">${Dinosaur.getSvg("amazon")}</div>` : ``)}
                            </div></div>`
                        );
                        $(Dinosaur.container).append($sidebar);
                    }
                    $sidebar.click(() => {
                        Dinosaur.config.sidebarLinkAllReviews &&
                            (Dinosaur.isVIPPlan ||
                                Dinosaur.config.allowedOptions?.includes("sidebarLinkAllReviews"))
                            ? (location.href = "/pages/dinosaur-reviews")
                            : Dinosaur.showAllReviews();
                    });
                    Dinosaur.log("Sidebar render done");
                }
                Dinosaur.renderSidebar = true;
                Dinosaur.log("Sidebar checking done");
            }
        },

        findMajorTitleElement: () => {
            let ret;
            if (Dinosaur.data.productName) {
                let maxSize = 0;
                $("p,span,div,h0,h1,h2,h3,h4,h5,i,b,u,a")
                    .filter(function () {
                        return (
                            $(this).find(":first").length == 0 &&
                            $(this).text().trim() == Dinosaur.data.productName &&
                            $(this).is(":visible") &&
                            $(this).height() > 15
                        );
                    })
                    .each(function (index) {
                        if (index < 3) {
                            const size = parseFloat(window.getComputedStyle(this).fontSize);
                            if (size > maxSize) {
                                maxSize = size;
                                ret = this;
                            }
                        }
                    });
            }
            return ret;
        },

        buildRatingMajor: () => {
            if (!Dinosaur.renderRatingMajor) {
                if (Dinosaur.isProductPage && Dinosaur.config.badgeOnProductPage) {
                    let badge = $(".ui-wlqwk85l");
                    if (!badge.length && Dinosaur.widgetsAuto) {
                        const snippet = `<div class="ui-bju4qg94 ui-wlqwk85l">`;
                        if (Dinosaur.config.xpathMajorRating)
                            badge = Dinosaur.insertElement(
                                [Dinosaur.config.xpathMajorRating],
                                $(snippet)
                            );
                        if (!badge?.length)
                            badge = Dinosaur.insertElement(
                                Dinosaur.ratingMajorRefSearch,
                                $(snippet)
                            );
                        if (!badge?.length) {
                            Dinosaur.productTitleElement = Dinosaur.findMajorTitleElement();
                            if (Dinosaur.productTitleElement) {
                                badge = $(snippet);
                                $(Dinosaur.productTitleElement).after(badge);
                            }
                        }
                    }
                    badge?.length &&
                        badge.data({
                            rating: Dinosaur.productRating?.average ?? 0,
                            raters: Dinosaur.productRating?.total ?? 0,
                        }) &&
                        Dinosaur.showRatingBadges(badge);
                    $(".ui-wlqwk85l .ui-gmp9sbz0").click(async (_) => {
                        if (Dinosaur.config.xpathReviewTabButton) {
                            $(Dinosaur.config.xpathReviewTabButton)[0]?.click();
                            await Dinosaur.delay(200);
                        }
                        Dinosaur.widgetElement?.scrollIntoView({ behavior: "smooth" });
                    });
                    Dinosaur.renderRatingMajor = true;
                    Dinosaur.log("RatingMajor checking done");
                }
            }
        },

        checkBranding: async () => {
            if (Dinosaur.isFreePlan) {
                const isInvisible = (selector) => {
                    const ele = $(selector)[0];
                    if (!ele) return false;
                    const style = getComputedStyle(ele);
                    return (
                        style.display == "none" ||
                        style.opacity == 0 ||
                        style.visibility != "visible" ||
                        !$(ele).is(":visible") ||
                        $(ele).width() < 10 ||
                        $(ele).height() < 10
                    );
                };
                setInterval(() => {
                    if (
                        !Dinosaur.config.textCustomizeCSS?.includes(".ui-ll3ggc6e") &&
                        !Dinosaur.config.allowedOptions?.includes("removeLogo") &&
                        (isInvisible(".ui-ll3ggc6e img") ||
                            isInvisible(".ui-ll3ggc6e") ||
                            isInvisible(".ui-ugxbef68") ||
                            isInvisible(".ui-h9avr9oh")) &&
                        !isInvisible(".ui-aarxyted")
                    )
                        $(".ui-aarxyted").remove();
                }, 5000);
            }
        },

        isRatingAfterLink: () => {
            return (
                !!Dinosaur.config.ratingAfterLink ||
                [137826795734].includes(window.Shopify?.theme?.id)
            );
        },

        isMatchingProductTitleStartsWith: () => {
            // because some store config to show product title with the variant name at the end so the exactly matching fail
            return (
                Dinosaur.config.findProductTitleStartsWith ||
                [161747501360].includes(window.Shopify?.theme?.id)
            );
        },

        getProductIds: async () => {
            // wait for ShopifyAnalytics available
            return;
            let i = 0;
            while (i++ < 10) {
                if (window.ShopifyAnalytics) break;
                await Dinosaur.delay(1000);
            }
            return window.ShopifyAnalytics?.meta?.products?.map((_) => "" + _.id);
        },

        processRatings: (ratings, anchors) => {
            const handles = Object.keys(ratings || []);
            if (!handles.length) return;
            let titleElements, ratingTarget;
            if (Dinosaur.config.xpathCollectionRating) {
                // find title elements using xpathCollectionRating
                const xss = Dinosaur.config.xpathCollectionRating.split(">>"),
                    xs = xss[0].split("|"),
                    selector = xs[0],
                    directive = (xs[1] ?? "").split(",");
                ratingTarget = xss[1];
                $(selector).each((_, el) => {
                    const innerText = $(el).text().trim();
                    titleElements == undefined &&
                        (titleElements = {
                            directive,
                            isStartsWith: directive.includes("startwith"),
                            isParent: directive.includes("parent"),
                            isSearchHandle: directive.includes("handle"),
                            items: {},
                            get: (title, handle) => {
                                let el = titleElements.isStartWith
                                    ? titleElements.items[
                                    Object.keys(titleElements.items).find((_) =>
                                        _.startsWith(title)
                                    )
                                    ]
                                    : titleElements.items[title];
                                if (el && titleElements.isParent) {
                                    titleElements.directive.map(
                                        (_) =>
                                            _ == "parent" &&
                                            (Array.isArray(el)
                                                ? el.forEach((_, i) => {
                                                    el[i] = el[i]?.parentElement;
                                                })
                                                : (el = el?.parentElement))
                                    );
                                }
                                if (handle && titleElements.isSearchHandle) {
                                    const els = Array.isArray(el) ? el : [el];
                                    el = els.filter((e) => {
                                        let found = $(e)
                                            .attr("href")
                                            ?.split("?")?.[0]
                                            ?.endsWith("/" + handle);
                                        if (found) return found;
                                        $(e)
                                            .find("a")
                                            .each(function () {
                                                found = $(this)
                                                    .attr("href")
                                                    ?.split("?")?.[0]
                                                    ?.endsWith("/" + handle);
                                                if (found) return false;
                                            });
                                        return !!found;
                                    });
                                }
                                return el;
                            },
                        });
                    if (!titleElements.items[innerText])
                        titleElements.items[innerText] = el;
                    else if (Array.isArray(titleElements.items[innerText]))
                        titleElements.items[innerText].push(el);
                    else
                        titleElements.items[innerText] = [
                            titleElements.items[innerText],
                            el,
                        ];
                });
            }
            const findTitleElement = (parent, title, handle) => {
                if (!title) return;
                let titleEle = titleElements?.get(title, handle);
                if (titleEle) return titleEle;
                if (!parent) return;
                Dinosaur.isMatchingProductTitleStartsWith()
                    ? $(parent)
                        .find(`*:visible`)
                        .each((_, el) => {
                            titleEle == undefined &&
                                $(el).height() > 10 &&
                                $(el).text().trim().startsWith(title) &&
                                (titleEle = el);
                        })
                    : $(parent)
                        .find(`*:visible:not(:has(*))`)
                        .each((_, el) => {
                            titleEle == undefined &&
                                $(el).height() > 10 &&
                                $(el).text().trim() == title &&
                                (titleEle = el);
                        });
                return titleEle;
            };
            let processed = 0;
            handles.map((handle) => {
                (anchors[handle] ?? [null])?.map((anchor) => {
                    const ele = Dinosaur.isRatingAfterLink()
                        ? anchor
                        : ratings[handle]?.title &&
                        (findTitleElement(anchor, ratings[handle].title, handle) ??
                            findTitleElement(
                                anchor?.parentElement,
                                ratings[handle].title,
                                handle
                            ));
                    if (ele) {
                        const els = Array.isArray(ele) ? ele : [ele];
                        els.forEach((el) => {
                            const { marginLeft, paddingLeft, fontSize } =
                                window.getComputedStyle(el);
                            const ratingWidget = $(
                                `<div style="${Dinosaur.config.starSize
                                    ? ""
                                    : `--dinosaur-star-size:calc(${fontSize}*1.1);`
                                }margin-left: ${marginLeft}; padding-left: ${paddingLeft};" class="ui-bju4qg94" data-rating="${(
                                    (ratings[handle].groupAverage > 0 && Dinosaur.isVIPPlan
                                        ? ratings[handle].groupAverage
                                        : ratings[handle].rating) + ""
                                ).replace(",", ".")}" data-raters="${(
                                    (ratings[handle].groupAverage > 0 && Dinosaur.isVIPPlan
                                        ? ratings[handle].groupTotal
                                        : ratings[handle].raters) + ""
                                )
                                    .replace(".", "")
                                    .replace(",", "")}">`
                            );
                            if (ratingTarget) {
                                const directive = ratingTarget.split(",");
                                let ref = $(el);
                                directive.map((x) => {
                                    x == "parent" && (ref = ref.parent());
                                    x == "next" && (ref = ref.next());
                                });
                                directive.includes("end")
                                    ? ref.append(ratingWidget)
                                    : directive.includes("begin")
                                        ? ref.prepend(ratingWidget)
                                        : directive.includes("before")
                                            ? ratingWidget.insertBefore(ref)
                                            : directive.includes("replace")
                                                ? (ratingWidget.insertAfter(ref), ref.remove())
                                                : directive.includes("content")
                                                    ? (ref.children().remove(), ref.append(ratingWidget))
                                                    : ratingWidget.insertAfter(ref);
                            } else ratingWidget.insertAfter(el);
                            processed++;
                        });
                    }
                });
            });
            processed &&
                Dinosaur.showRatingBadges() &&
                window.dispatchEvent(new Event("resize"));
        },

        checkRatings: async (useThemeRating) => {
            if (!Dinosaur.config.badgeOnProductsList || Dinosaur.isUIPreview) return;
            if (
                useThemeRating ||
                $("ui-bju4qg94 .ui-bju4qg94[data-id]").length ||
                ($(".ui-bju4qg94[data-id]").length &&
                    Dinosaur.config.useThemeRatingItem)
            ) {
                Dinosaur.showRatingBadges(".ui-bju4qg94[data-id]:not([rendered])");
                setTimeout(() => Dinosaur.checkRatings(true), 1000);
            } else if (
                Dinosaur.widgetsAuto &&
                (!Dinosaur.isOtherPage || Dinosaur.config.showRatingCustomPage)
            ) {
                const anchors = {},
                    availableRatings = {};
                let productIds = await Dinosaur.getProductIds(),
                    productHandles = [];
                $(
                    Dinosaur.config.xpathCollectionHandles ||
                    'a[href*="/products/"]:not([rendered]):visible'
                ).each((index, element) => {
                    $(element).attr("rendered", "");
                    const handle = decodeURIComponent(
                        $(element).attr("href")?.split("?")[0]?.split("/").at(-1) ?? ""
                    );
                    if (
                        handle &&
                        !decodeURIComponent(location.href).includes(`products/${handle}`)
                    ) {
                        productIds == undefined &&
                            !productHandles.includes(handle) &&
                            productHandles.push(handle);
                        anchors[handle] === undefined && (anchors[handle] = []);
                        anchors[handle].push(element);
                    }
                });
                if (
                    Dinosaur.ratings &&
                    Dinosaur.useRatingsCache &&
                    !Dinosaur.config.disableRatingsCache &&
                    !Dinosaur.config.useAmzSummary
                ) {
                    let changed = false;
                    productHandles?.forEach((handle, index) => {
                        if (Dinosaur.ratings[handle]) {
                            availableRatings[handle] = Dinosaur.ratings[handle];
                            delete productHandles[index];
                            changed = true;
                        }
                    });
                    changed && (productHandles = productHandles.filter((_) => !!_));
                    if (productIds?.length) {
                        !Dinosaur.productRatings &&
                            ((Dinosaur.productRatings = {}),
                                Object.keys(Dinosaur.ratings).map((handle) => {
                                    Dinosaur.productRatings[Dinosaur.ratings[handle].productId] = {
                                        ...Dinosaur.ratings[handle],
                                        handle,
                                    };
                                }));
                        changed = false;
                        productIds.forEach((productId, index) => {
                            if (Dinosaur.productRatings[productId]) {
                                const handle = Dinosaur.productRatings[productId].handle;
                                availableRatings[handle] = Dinosaur.ratings[handle];
                                delete productIds[index];
                                changed = true;
                            }
                        });
                        changed && (productIds = productIds.filter((_) => !!_));
                    }
                    Dinosaur.processRatings(availableRatings, anchors);
                }
                if (productIds?.length || productHandles?.length) {
                    await Dinosaur.doFetch({
                        cached: true,
                        url: `/apps/dino/get-ratings`,
                        data: {
                            productIds,
                            productHandles,
                            locale: Dinosaur.locale,
                            useAmzSummary: !!Dinosaur.config.useAmzSummary,
                            saveRatings:
                                !!Dinosaur.ratings &&
                                !Dinosaur.config.useAmzSummary &&
                                Object.keys(Dinosaur.ratings || []).length < 200,
                        },
                        callback: (ratings) => Dinosaur.processRatings(ratings, anchors), //Object.assign(availableRatings, ratings),
                    });
                }
                if (!productIds) setTimeout(Dinosaur.checkRatings, 1000);
            }
        },

        formHtml:
            () => `<div class="ui-vbexmhlq ui-drz7nqpr" style="z-index:${Dinosaur.zIndex - 2}">
    <div class="ui-s3tdjxqk">
      <div class="ui-vbexmhlq-header">
        <i class="ui-36c8wcbw"></i>
      </div>
      <div class="ui-vbexmhlq-product">
        <div class="ui-vbexmhlq-product-image">
            <img src=${Dinosaur.data.productImage} alt="product_image" />
        </div>
        <div class="ui-vbexmhlq-product-name">
            ${Dinosaur.config.reviewFormHeading} <strong>${Dinosaur.data.productName}</strong>
        </div>
      </div>
      <div class="ui-l057676x">
        <div class="ui-8xx812ik">
          <div id="ui-7nc2shc5">
            <input type="radio" id="ui-lu7bp9o7" name="ui-rchse7sz" value="5"/>
            <label for="ui-lu7bp9o7"></label>
            <input type="radio" id="ui-l7pm0kf3" name="ui-rchse7sz" value="4" />
            <label for="ui-l7pm0kf3"></label>
            <input type="radio" id="ui-npne8vnn" name="ui-rchse7sz" value="3" />
            <label for="ui-npne8vnn"></label>
            <input type="radio" id="ui-l9uiyts9" name="ui-rchse7sz" value="2" />
            <label for="ui-l9uiyts9"></label>
            <input type="radio" id="ui-cf4j1pzt" name="ui-rchse7sz" value="1" />
            <label for="ui-cf4j1pzt"></label>
          </div>
          <span class="ui-7nc2shc5-notify"></span>
        </div>
        <input autocomplete="off" id="ui-3847ly29" type="text" placeholder="${Dinosaur.config.textReviewTitle}">
        <textarea id="ui-ylyu2yis" row="5" placeholder="${Dinosaur.config.textReviewContent}"></textarea>
        <div class="ui-9s039zv2">
          <div><input autocomplete="off" id="ui-48uazgoi" type="text" placeholder="${Dinosaur.config.textReviewerName}"></div>
          <div>&nbsp;</div>
          <div><input autocomplete="off" id="ui-g0nqdpen" type="text" placeholder="${Dinosaur.config.textReviewerEmail}"></div>
        </div>
        <div class="ui-rha3iys0">
            <div class="ui-740og1ut"></div>
          <div class="ui-x6o4bhm5">
            <input type="file" accept="image/jpeg,image/png,image/gif,image/webp,video/mp4,video/quicktime,video/ogg,video/webm" id="ui-fl9qz09w" multiple style="display:none"/>
            <label for="ui-fl9qz09w">
              ${Dinosaur.getSvg("upload")}
            </label>
          </div>
        </div>
        <button class="ui-ehvjvjix">${Dinosaur.config.textSubmitReview}</button>
      </div>
    </div>
    </div>`,
        widgetHtml: () => `<div class="ui-h9avr9oh"></div>
    <div class="ui-onzdwmtm ui-m4viwpr6" ${Dinosaur.config.widgetLayout}>
      <div class="ui-4btxmveg"></div>
      <div class="ui-u6og66x9"></div>
    </div>`,
        widgetRefSearch: [
            //format: (<theme_store_id/theme_id/**theme_name**>)<selector>|<directive:after,before,begin,end,replace>
            //---- custome themes --------
            "(124074918066)main|end",
            "(160084820270)section:last|before",
            "(158522376487)section.relateproduct|before", //theme 'Fashe'
            "(158653874462).main.content", //theme 'Turbo theme'
            "(154260570452)#shopify-section-footer|before",
            //-----------------------------
            "#shopify-product-reviews|replace", // add to review tab
            "#review.tab-pane|content",
            "#shopify-section-product-recommendations|before",
            ".product.main-section",
            ".product-single",
            ".tab-pd-details",
            ".product-description",
            ".related-products|before",
            "main|end", //at the end of main
        ],

        ratingBadgeRefSearch: [
            //format: (<theme_store_id>)<selector>|<directive>
            ".price|begin,parent", //before .price class
            ".product-price|begin,parent",
        ],

        ratingMajorRefSearch: [
            //format: (<theme_store_id>)<selector>|<directive>\
            // specific theme ----------------------------
            ".price-review .spr-badge|replace", //theme 'good life', id: 157341810992
            //--------------------------------------------
            ".product__title",
            ".product_title",
            ".product-title",
            ".product__section-title|end",
            //".title|end",
            //"h1.title", //theme Providence
            "div[class$='--title'],div[class*='--title ']|end",
            ".product-single__title",
            ".productView-title",
            //--------------------------------------------
            '.grid-item>h1.h2[itemprop="name"]',
            '.grid__item>h1.h2[itemprop="name"]',
            //--------------------------------------------
            ".product__title .product__title--template",
            ".ProductMeta__Title",
            ".tt-product-single-info .tt-title",
            ".product-block-list__item .product-meta__title",
            ".gt_atom-cZGCOCvfkBpcRgQ_productTitle",
            ".pr_title",
            ".prd-block_title",
            ".productInfo h1",
            ".product_name",
            ".product-description-header",
            ".layout-column-half-right>.title",
            ".product-page-info__title>h1",
            "h1.gt_heading",
            "#popup_cart_title",
            ".apb_product_detail_information_title",
            ".product-area__details__title",
            ".product-info>h3.title30",
            ".gt_product-content>h2",
            ".product-detail__title",
            ".prod__title",
            ".product-meta>.product-meta__title",
            ".productInfo>h2",
            ".product-name",
            ".product__section-title>h1",
            //--------------------------------------------
            ".page-header h1.title",
            ".title-detail",
            ".title>h1",
            ".title-row>h1.title",
            "h2.product-page--heading",
            ".section-header__title.product-titre",
            ".block.type-title",
            "h2.product-details-product-title",
            "h1.product-info__title",
            ".product-detail-part>h2[itemprop='name']",
            "h2.single_product__title",
            "#product-description h1.h2",
            "h1.product-item-caption-title.-product-page",
            "h1.product-title",
            "h2[data-attribute='productTitle']",
            //--------------------------------------------
            "h1.product__section-title",
            "h1.product-single__title-text",
            'h1[itemprop="name"]',
            ".proBoxInfo>h1",
            ".product-header",
            "h1.title-primary",
            "[data-product-description-container]>h2.h1",
            ".col-md-12>.title-sale",
            ".shg-product-title-component",
            ".t4s-product__title",
            ".bls__product-title",
            //--------------------------------------------
            ".product-price|begin,parent",
            ".product__price|begin,parent", //theme Motion
        ],

        selectorReviewTabButton: ['li a[href="#review"]'].join(","),

        insertElement: (searches, elementHtml, all) => {
            let ret;
            for (let i = 0; i < searches.length; i++) {
                const ss = searches[i].split("mobile:");
                ss.length > 1 &&
                    (searches[i] = ss[Dinosaur.isMobile ? ss.length - 1 : 0].trim());
                const tmps = searches[i].split("|"),
                    directive = ((tmps.length > 1 && tmps[1]) || "after").split(",");
                let ref = tmps[0];
                const matches = ref.match(/\(([^)]+)\)/); //find themeInfo between (...)
                if (matches?.length == 2) {
                    const theme = window.Shopify.theme,
                        themeInfo = matches[1].trim(),
                        themeInfoClean = themeInfo.replaceAll("**", "");
                    if (
                        themeInfo &&
                        !(
                            theme?.theme_store_id == themeInfo ||
                            theme?.id == themeInfo ||
                            (isNaN(themeInfo) &&
                                (theme?.name == themeInfo ||
                                    (themeInfo.startsWith("**") &&
                                        themeInfo.endsWith("**") &&
                                        theme?.name.includes(themeInfoClean)) ||
                                    (themeInfo.startsWith("**") &&
                                        theme?.name.endsWith(themeInfoClean)) ||
                                    (themeInfo.endsWith("**") &&
                                        theme?.name.startsWith(themeInfoClean))))
                        )
                    )
                        continue;
                    ref = ref.replace(matches[0], "");
                }
                //!ref.includes(":visible") && (ref += ":visible");
                let refElement = $(ref);
                refElement.length > 1 &&
                    (refElement = $(ref).filter(function () {
                        return (
                            $(this).is(":visible") &&
                            $(this).width() > 100 &&
                            $(this).height() > 10
                        );
                    }));
                if (refElement.length == 1) {
                    directive.map((x) => {
                        x == "parent" && (refElement = refElement.parent());
                    });
                    if (refElement.length == 1 && !refElement.attr("ui-iya2uos5")) {
                        refElement.attr("ui-iya2uos5", 1);
                        ret = $(elementHtml);
                        if (directive.includes("end")) {
                            refElement.append(ret);
                        } else if (directive.includes("begin")) {
                            refElement.prepend(ret);
                        } else if (directive.includes("before")) {
                            ret.insertBefore(refElement);
                        } else if (directive.includes("replace")) {
                            ret.insertAfter(refElement);
                            refElement.remove();
                        } else if (directive.includes("content")) {
                            refElement.children().remove();
                            refElement.append(ret);
                        } else {
                            ret.insertAfter(refElement);
                        }
                    }
                    if (!all) break;
                }
            }
            return ret;
        },

        buildSummaryWidget: () => {
            let widget = $(".ui-x251odu8").first();
            if (!widget.length || Dinosaur?.shopSummary?.total <= 0) return;
            let html = "";
            if (Dinosaur.config.trustedBadgeType == "brand") {
                html += `
                ${Dinosaur.config.linkToAllReviewsPage ? `<a target="_blank" href=${Dinosaur.config.allReviewsPageUrl || "/pages/reviews"}>` : '<div>'}
                <div class="ui-x04pnml7">
                    <div class="ui-bnmgg5sq">
                    <div class="ui-hebw76s8">${Dinosaur?.shopSummary?.rating}</div>
                    ${Dinosaur.config.shopName ? `<div class="ui-x05155pj">${Dinosaur.shopName}</div>` : ""}
                        <div class="ui-pww7vsqi">${Dinosaur.buildStarRating(Dinosaur?.shopSummary?.rating)}</div>
                        <div class="ui-3vsz0mwo">${Dinosaur?.shopSummary?.total} reviews</div>
                        ${Dinosaur.config.trustedBadgeAmazon ? Dinosaur.getSvg("svgfull", "", "50px", "50px") : ``}
                    </div>
                    <div class="ui-y99kywpc">
                        <div class="ui-2vv2h6gq">Virified by Rocket</div>
                    </div>
                </div>
                ${Dinosaur.config.linkToAllReviewsPage ? '</a>' : '</div>'}
                `
            }
            widget.html(html);
        },

        buildReviewsWidget: (parent) => {
            console.log(1, Dinosaur.config.widgetLayout);
            if (!Dinosaur.isUIPreview && Dinosaur.renderWidget) return;
            let widget = $(".ui-aarxyted").first();
            if (Dinosaur.config.showBody || Dinosaur.config.showHeader) {
                if (
                    !widget.length &&
                    (Dinosaur.isFeaturedWidget || Dinosaur.isProductPage) &&
                    (parent || Dinosaur.widgetsAuto)
                ) {
                    widget = $('<div class="ui-aarxyted">');
                    if (parent) $(parent).append(widget);
                    else if (Dinosaur.widgetsAuto) {
                        let selectors = Dinosaur.widgetRefSearch;
                        if (Dinosaur.isProductPage) {
                            Dinosaur.config.xpathReviewWidget &&
                                (selectors = Dinosaur.config.xpathReviewWidget.split(";"));
                        } else if (Dinosaur.isFeaturedWidget) {
                            Dinosaur.config.xpathFeaturedReviews &&
                                (selectors = Dinosaur.config.xpathFeaturedReviews.split(";"));
                        }
                        widget = Dinosaur.insertElement(selectors, widget);
                    }
                }
                if (
                    widget?.length &&
                    (!Dinosaur.isFeaturedWidget || Dinosaur.featuredReviews?.length)
                ) {
                    Dinosaur.widgetElement = widget[0];
                    widget.html(Dinosaur.widgetHtml());
                    if (Dinosaur.isProductPage) {
                        if (Dinosaur.isUIPreview) $(".ui-vbexmhlq").remove();
                    }
                    Dinosaur.buildProductReviews();
                    Dinosaur.log("Review widget render done");
                } else widget?.remove();
            } else if (!window.Shopify?.designMode) widget?.html("");
            if (widget?.length) {
                const attr = {
                    filters: Dinosaur.config.showReviewFilters || "none",
                    layout: Dinosaur.config.widgetLayout,
                };
                Dinosaur.isMobile && (attr.mobile = "");
                if (Dinosaur.isUIPreview) widget.removeAttr(Object.keys(attr).join(" "));
                widget.attr(attr);
                Dinosaur.checkWidgetMargin();
            }
            Dinosaur.renderWidget = true;
            Dinosaur.log("Review widget checking done");
        },

        insertSnippets: () => {
            if (window._dinosaurRichSnippets) {
                Dinosaur.log("Begin insertSnippets");
                const nodeList = document.querySelectorAll("script");
                for (let i = 0; i < nodeList.length; i++) {
                    const scriptTag = nodeList[i];
                    if (scriptTag.type == "application/ld+json") {
                        try {
                            const tmp = JSON.parse(scriptTag.innerHTML || "{}");
                            if (tmp["@type"] == "Product") {
                                tmp.aggregateRating = window._dinosaurRichSnippets.aggregateRating;
                                scriptTag.innerHTML = JSON.stringify(tmp);
                                delete window._dinosaurRichSnippets;
                                return;
                            }
                        } catch { }
                    }
                }
                const script = document.createElement("script");
                script.type = "application/ld+json";
                script.innerHTML = JSON.stringify(window._dinosaurRichSnippets);
                document.head.appendChild(script);
                delete window._dinosaurRichSnippets;
            }
        },

        contrast: (t, r) => {
            if (!(t?.length >= 6 && r?.length >= 6)) return 10;
            let $ = (t, r, $) => {
                var n = [t, r, $].map((t) =>
                    (t /= 255) <= 0.03928
                        ? t / 12.92
                        : Math.pow((t + 0.055) / 1.055, 2.4)
                );
                return 0.2126 * n[0] + 0.7152 * n[1] + 0.0722 * n[2];
            },
                n = (t) => {
                    if (Array.isArray(t) && 3 == t.length) return t;
                    if (
                        (t.startsWith("#") && (t = t.substring(1)),
                            3 == t.length &&
                            (t = t
                                .split("")
                                .map((t) => t + "" + t)
                                .join("")),
                            6 != t.length)
                    )
                        t = t.substring(0, 6); //throw "Only six-digit hex ms are allowed.";
                    var r,
                        $ = t.match(/.{1,2}/g);
                    return [parseInt($[0], 16), parseInt($[1], 16), parseInt($[2], 16)];
                };
            var a,
                e,
                i = $(...n(t)),
                _ = $(...n(r));
            return (Math.max(i, _) + 0.05) / (Math.min(i, _) + 0.05);
        },

        shadeColor: (color, percent) => {
            var R = parseInt(color.substring(1, 3), 16);
            var G = parseInt(color.substring(3, 5), 16);
            var B = parseInt(color.substring(5, 7), 16);
            R = parseInt((R * (100 + percent)) / 100);
            G = parseInt((G * (100 + percent)) / 100);
            B = parseInt((B * (100 + percent)) / 100);
            R = R < 255 ? R : 255;
            G = G < 255 ? G : 255;
            B = B < 255 ? B : 255;
            R = Math.round(R);
            G = Math.round(G);
            B = Math.round(B);
            var RR =
                R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
            var GG =
                G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
            var BB =
                B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);
            return "#" + RR + GG + BB;
        },
        lightenColor: (color) => Dinosaur.shadeColor(color, 40),
        darkenColor: (color) => Dinosaur.shadeColor(color, -40),

        start: async () => {
            if (window._isDinosaurStarting) return;
            window._isDinosaurStarting = true;
            Dinosaur.log("Dinosaur starting...");

            // check and wait 10 secs for _dinosaurSub is available to read
            // because some theme prevent script tags from initial but reactivate them later
            let i = 0;
            while (i++ < 10) {
                if (window._dinosaurSub) break;
                await Dinosaur.delay(1000);
            }
            if (window._dinosaurSub === undefined) {
                Dinosaur.log("Dinosaur could not start (SubscriptionPlan not found)");
                return;
            }

            window.DinosaurMediaErr = Dinosaur.mediaError;
            //Dinosaur.insertSnippets();
            //check css loaded
            if (
                !getComputedStyle(document.querySelector(":root"))?.getPropertyValue(
                    "--dinosaur-styles"
                )
            ) {
                Dinosaur.log("Load dinosaur css");
                //find dinosaur-review.js path
                let css, i;
                [...document.getElementsByTagName("script")].some(
                    (_) => (
                        (i = _.src?.indexOf("dinosaur-review.")),
                        i > 0 && (css = _.src.substring(0, i) + "dinosaur-review.css")
                    )
                );
                css && (await Dinosaur.loadCSSJS(css));
            }

            Dinosaur.init({
                action: async () => {
                    Dinosaur.log("Dinosaur init done");
                    Dinosaur.isBuilding = true;
                    Dinosaur.isAllReviewsPage = $(".ui-aarxyted[extension]").length && !Dinosaur.data?.productId;
                    if (Dinosaur.isAllReviewsPage) {
                        if (
                            Dinosaur.isVIPPlan ||
                            Dinosaur.config.allowedOptions?.includes("featuredLinkAllReviews") ||
                            Dinosaur.config.allowedOptions?.includes("sidebarLinkAllReviews")
                        ) {
                            $(".ui-aarxyted[extension]").attr("all-reviews", "");
                            Dinosaur.config.pageSize = 15;
                            Dinosaur.config.widgetLayout = "list";
                            Dinosaur.config.textWidgetTitle = Dinosaur.config.textFeaturedTitle;
                            Dinosaur.buildStyles();
                            Dinosaur.buildReviewsWidget();
                            await Dinosaur.loadProductReviews({
                                page: 1,
                                featured: Dinosaur.isAllReviewsPage,
                                requireCount: true,
                            });
                        }
                    } else {
                        Dinosaur.buildStyles();
                        Dinosaur.checkParams();
                        if (!Dinosaur.processedPreview) {
                            Dinosaur.buildReviewsWidget();
                            Dinosaur.pendingAction?.();
                        }
                        Dinosaur.buildSidebar();
                        Dinosaur.buildRatingMajor();
                        Dinosaur.checkRatings();
                        // Dinosaur.buildReviewsPopup();
                        Dinosaur.buildPopupWidget();
                        Dinosaur.buildSummaryWidget();
                        Dinosaur.loadProductReviews({ cacheFistPage: true }); // cache the first page
                    }
                    Dinosaur.checkBranding();
                    Dinosaur.translate();
                    Dinosaur.isBuilding = false;
                },
            });
        },

        setConfig: (config, isUpdate) => {
            config = JSON.parse(Dinosaur.xssEscape(JSON.stringify(config || {})));
            const MAIN_COLOR = Dinosaur.MAIN_COLOR;
            const WIDGET_CONFIG_DEFAULT = {
                language: "English",
                autoLanguage: true,
                autoTranslateReviews: false,
                customTexts: null, // {English:{}, Spain:{},...}
                widgetOnProductPage: true,
                badgeOnProductPage: true,
                badgeOnProductsList: true,

                showRatingProductDetails: false,
                showRatingProductList: false,
                ratingSameFormat: false,
                showSideBarHomePage: false,
                showSideBarCollectionPage: false,
                showSideBarProductPage: false,
                showSideBarOthersPage: false,
                ratingFormatProduct: "({{review_number}} {{reviews}})",
                ratingFormatCollection: "({{review_number}} {{reviews}})",

                keyWordSidebar1Star: "Excellent!",
                keyWordSidebar2Star: "Good!",
                keyWordSidebar3Star: "So so!",
                keyWordSidebar4Star: "",
                keyWordSidebar5Star: "",

                keyWordWidget1Star: "Excellent!",
                keyWordWidget2Star: "Good!",
                keyWordWidget3Star: "So so!",
                keyWordWidget4Star: "",
                keyWordWidget5Star: "",

                showSummary: true,
                showHeader: true,
                showBody: true,
                showMediaList: false,
                albumType: "professional",
                hideHeaderWhenNoReview: false,
                showReviewButton: true,
                showWidgetTitle: true,
                showAverageRating: true,
                ratingSummaryType: "compact",
                showReviewFilters: "star", //star, button, solid, number, false
                paginationType: "numbers,center", //numbers, pages, prev-next, more, none
                colorStar: "#FF9900",
                colorAverage: "",
                colorBorderAverage: "",
                colorBorderReview: "",
                colorBorderButton: "",
                colorText: "",
                topPaddingProduct: 5,
                bottomPaddingProduct: 5,
                topPaddingCollection: 5,
                bottomPaddingCollection: 5,
                colorBackground: "",
                colorVerifiedBadge: "#fff",
                backgroundVerifiedBadge: "#000",
                colorReply: "",
                colorTitle: "#000",
                colorWidgetBackground: "",
                colorWidgetText: "",
                starSize: "",
                thumbSize: 80,
                thumbRounded: 0,
                maxLines: 4,
                cornerRadius: 0,
                pageSize: 10,
                widgetLayout: "list",
                defaultSortReviewBy: "date",
                pinnedFirst: true,
                showReply: true,
                allowSortReview: true,
                layoutShape: "square",
                fontSize: 15,
                borderSize: 0,
                colorButtonText: "#fff",
                colorButtonBackground: "#000",
                textCustomizeCSS: "",
                textReviewDateFormat: "MMM DD, YYYY",

                sidebarBackground: "#ffffff",
                sidebarCaptionColor: MAIN_COLOR,
                sideBarShowReviewsCount: true,
                sideBarLinkAllReviews: false,
                sidebarDisplayType: "popup",
                sidebarLinkAllReviews: false,
                showEmptyStarNoReviewProduct: false,
                showEmptyStarNoReviewCollection: false,
                ratingBadgeBackground: "",
                ratingBadgeColor: "",
                ratingIcon: "gG",
                ratingDetailsPopup: true,
                ratingWords: "Excellent!;Good!;Fine;;",

                showReviewDate: true,
                showReviewTitle: true,
                showReviewContent: true,
                showReviewerCountry: true,
                showReviewerName: true,
                showVerifiedBadge: true,
                showPhotoVideo: true,
                showLikeReview: false,

                slideDelay: 10,
                xpathReviewWidget: "",
                xpathFeaturedReviews: "",
                xpathMajorRating: "",
                xpathCollectionRating: "",
                xpathCollectionHandles: "",
                xpathReviewTabButton: "",

                featuredShowReply: false,
                featuredShowLike: false,
                featuredLayout: "carousel",
                featuredPaginationType: "numbers,center",
                featuredShowProduct: true,
                featuredShowReviewsCount: true,
                featuredLinkAllReviews: false,
                featuredPageSize: 10,
                featuredMaxLines: 18,

                allReviewsShowReviewsSummary: true,
                allReviewsAllowFilters: true,
                allReviewsAllowSorting: true,
                allReviewsShowProduct: true,

                showPopupHomePage: false,
                showPopupCollectionPage: false,
                showPopupProductPage: false,
                showPopupOthersPage: false,
                reviewsSelection: "newest-5-star",
                widgetPosition: "bottom-left",
                delayBeforeFirstPopup: 5,
                popupDuration: 5,
                intervalBetweenPopup: 5,
                hideWidgetInMobileTablet: true,
                cornerRadiusPopup: 10,
                pageSizePopup: 10,
                linkToAllReviewsPage: true,
                allReviewsPageUrl: "",

                trustedBadgeType: "brand",
                trustedBadgeColor: "#FF9900",
                trustedBadgeAlign: "center",
                trustedBadgeAmazon: false,
                shopName: false,

                colorButtonAmazonBackground: "#FF9900",
                colorButtonAmazonText: "#000",
                showAmazonButton: false,
                showAmazonSign: true,

                floatingRadius: 0,
                showAmazonSignFloating: false,

                showAmazonSignFeature: false,
                showAmazonSignPopup: false
            };

            // backward compatible
            config.showReviewFilters === true &&
                (config.showReviewFilters =
                    config.showFilterButtons === true
                        ? "button"
                        : WIDGET_CONFIG_DEFAULT.showReviewFilters);
            config.widgetLayout == "carousel";

            if (config.sidebarCaption != undefined) {
                config.textSidebar = config.textSidebar ?? config.sidebarCaption;
                delete config.sidebarCaption;
            }

            if (config.showPagination != undefined) {
                config.paginationType =
                    config.paginationType ??
                    (config.showPagination ? "pages,right" : "none");
                delete config.showPagination;
            }

            if (config.showSidebar != undefined) {
                config.showSideBarHomePage =
                    config.showSideBarHomePage ?? config.showSidebar;
                config.showSideBarCollectionPage =
                    config.showSideBarCollectionPage ?? config.showSidebar;
                config.showSideBarProductPage = config.showSideBarProductPage ?? false;
                config.showSideBarOthersPage =
                    config.showSideBarOthersPage ?? config.showSidebar;
                delete config.showSidebar;
            }

            if (config.ratingBadgeNumberFormat != undefined) {
                config.ratingFormatProduct =
                    config.ratingFormatProduct ?? config.ratingBadgeNumberFormat;
                config.ratingFormatCollection =
                    config.ratingFormatCollection ?? config.ratingBadgeNumberFormat;
                delete config.ratingBadgeNumberFormat;
            }

            if (config.ratingBadgeShowNumber === false) {
                config.ratingFormatProduct = "";
                config.ratingFormatCollection = "";
                delete config.ratingBadgeShowNumber;
            }

            if (config.showCountry != undefined) {
                config.showReviewerCountry =
                    config.showReviewerCountry ?? config.showCountry;
                delete config.showCountry;
            }

            // custom text language
            if (config.localeBySubDomain) {
                Dinosaur.locale = ((hs) => hs.length == 3 && hs[0] != "www" && hs[0])(
                    location.host.split(".")
                );
            }
            !Dinosaur.locale && (Dinosaur.locale = window["Shopify"]?.locale || "en");

            let lang = Dinosaur.isUIPreview
                ? config.language
                : config.autoLanguage ?? WIDGET_CONFIG_DEFAULT.autoLanguage
                    ? Dinosaur.lang.codes[Dinosaur.locale?.split("-")[0]]
                    : config.language;
            if (!lang) {
                lang = WIDGET_CONFIG_DEFAULT.language;
                Dinosaur.translateTexts = true;
            }
            const langTexts =
                Dinosaur.lang[lang == "custom" ? WIDGET_CONFIG_DEFAULT.language : lang],
                customTexts = config.customTexts?.[lang];

            // merge config with default
            Dinosaur.config = {
                ...WIDGET_CONFIG_DEFAULT,
                ...langTexts,
                ...customTexts,
                ...(isUpdate && Dinosaur.config),
                ...config,
            };

            //remap rating letters
            Dinosaur.config.ratingIcon =
                {
                    aA: "", //sharp star
                    gG: "", //slightly rounded star
                    hH: "", //rounded star
                    iI: "", //fire
                    jJ: "", //heart
                    kK: "", //crown
                    lL: "", //cup
                    mM: "", //pet
                    nN: "", //leaf
                    oO: "", //chef
                    pP: "" //like
                    //sort icon: \e902, x-icon: \e901, x: \e900"
                }[Dinosaur.config.ratingIcon] ?? Dinosaur.config.ratingIcon;
            Dinosaur.config.autoTranslateReviews &&
                Dinosaur.locale != "en" &&
                Dinosaur.config.textReviewDateFormat.includes("MMM") &&
                (Dinosaur.config.textReviewDateFormat = "MM/DD/YYYY");
            !Dinosaur.config.starSize && (Dinosaur.config.starSize = 18);
            !Dinosaur.config.colorButtonBackground &&
                (Dinosaur.config.colorButtonBackground = Dinosaur.config.colorStar);
            !Dinosaur.config.xpathReviewTabButton &&
                (Dinosaur.config.xpathReviewTabButton = Dinosaur.selectorReviewTabButton);
            Dinosaur.config.borderSize = isNaN(Dinosaur.config.borderSize)
                ? 0
                : Number(Dinosaur.config.borderSize);
            const words = Dinosaur.config.ratingWords?.split(";");
            Dinosaur.ratingWords = {
                5: words?.[0] ?? "",
                4: words?.[1] ?? "",
                3: words?.[2] ?? "",
                2: words?.[3] ?? "",
                1: words?.[4] ?? "",
            };
        },
        lang: {
            codes: {
                en: "English",
                fr: "French",
                ar: "Arab",
                es: "Spanish",
                pt: "Portuguese",
                nl: "Dutch",
                it: "Italian",
                de: "Germany",
                pl: "Polish",
                ru: "Russian",
                sv: "Swedish",
            },
            English: {
                textWidgetTitle: "Customer Reviews",
                textSidebar: "★ Reviews",
                textFeaturedReviews: "Featured Reviews",
                textFeaturedTitle: "What our customers think",
                tabTitle: "What our customers think",
                textReviewButton: "Write a review",
                textReviewButtonNone: "Be first leave a review",
                textShopReply: "Replied:",
                textReviewSummary: "Based on {{reviews_count}} {{reviews}}",
                textReviewerName: "Your name",
                textReviewerEmail: "Your email address",
                textReviewRating: "Your Rating",
                reviewFormHeading: "What do you think about",
                textReviewTitle: "Give your review title",
                textReviewContent: "Start writing here...",
                textSubmitReview: "Submit review",
                textSendingReview: "Review sending...",
                textReviewSuccess: "Review submitted successfully!",
                textReviewFailed: "Something went wrong!",
                textUploadMediaFailed: "Upload Picture/Video failed.",
                textRating: "Field is required.",
                textValidationName: "Field is required.",
                textValidationEmail: "Field is required.",
                textValidationContent: "Field is required.",
                textValidationLimitFiles: "Maximum ## files upload",
                textValidationLimitVideo: "One video accepted for upload",
                textAddMedia: "Picture/Video",
                textSortBy: "Sort by",
                textSortByFeatured: "Featured",
                textSortByTime: "Most recent",
                textSortAmazon: "Amazon reviews",
                textSortByHigh: "Highest rating",
                textSortByLow: "Lowest rating",
                textSortByPhoto: "Photo first",
                textSortHelpful: "Most helpful",
                textLikeReview: "Helpful?",
                textLikeReview1: "Like",
                textLikeReview2: "Vote",
                textVerified: "Verified",
                textVerified1: "Purchased",
                textVerified2: "Purchase verified",
                textReview: "review",
                textReviews: "reviews",
                textSeeReviews: "See customer reviews",
                textShowMore: "More reviews",
                textShowAll: "All reviews",
                textPrevPage: "Previous page",
                textNextPage: "Next page",
                textReadMore: "Read more",
            },
            French: {
                textWidgetTitle: "Avis des clients",
                textSidebar: "★ Avis",
                textFeaturedReviews: "Avis en vedette",
                textFeaturedTitle: "Ce que les gens disent",
                tabTitle: "Ce que les gens disent",
                textReviewButton: "Écrire un avis",
                textReviewButtonNone: "Soyez le premier à écrire un avis",
                textShopReply: "A répondu:",
                textReviewSummary: "Basé sur {{reviews_count}} avis",
                textReviewerName: "Votre nom",
                textReviewerEmail: "Votre adresse e-mail",
                textReviewRating: "Votre note",
                reviewFormHeading: "Que penses-tu de",
                textReviewTitle: "Donnez un titre à votre avis",
                textReviewContent: "Commencez à écrire ici...",
                textSubmitReview: "Soumettre un avis",
                textSendingReview: "Envoi d'avis...",
                textReviewSuccess: "Avis soumis avec succès!",
                textReviewFailed: "Quelque chose s'est mal passé!",
                textUploadMediaFailed: "Le téléchargement de l'image/vidéo a échoué..",
                textRating: "Une évaluation est requise.",
                textValidationName: "Le nom est obligatoire.",
                textValidationEmail: "L'adresse e-mail est requise.",
                textValidationContent: "Le contenu de la révision est requis.",
                textValidationLimitFiles: "Maximum ## fichiers téléchargés",
                textValidationLimitVideo: "Une vidéo acceptée pour téléchargement",
                textAddMedia: "Image/Vidéo",
                textSortBy: "Trier par",
                textSortByFeatured: "En vedette",
                textSortByTime: "Le plus récent",
                textSortByHigh: "Note la plus élevée",
                textSortByLow: "Note la plus basse",
                textSortByPhoto: "Photo d'abord",
                textSortHelpful: "Le plus utile",
                textLikeReview: "Utile?",
                textLikeReview1: "Comme",
                textLikeReview2: "Vote",
                textVerified: "Vérifié",
                textVerified1: "Acheté",
                textVerified2: "Achat vérifié",
                textReview: "avis",
                textReviews: "avis",
                textSeeReviews: "Voir les avis clients",
                textShowMore: "Plus d'avis",
                textShowAll: "Afficher tout",
                textPrevPage: "Page précédente",
                textNextPage: "Page suivante",
                textReadMore: "En savoir plus",
            },
            Germany: {
                textWidgetTitle: "Kundenbewertungen",
                textSidebar: "★ Bewertungen",
                textFeaturedReviews: "Empfohlene Rezensionen",
                textFeaturedTitle: "Was sagen die Leute",
                tabTitle: "Was sagen die Leute",
                textReviewButton: "Eine Rezension schreiben",
                textReviewButtonNone: "Schreiben Sie als Erster eine Bewertung",
                textShopReply: "Antwortete",
                textReviewSummary: "Basierend auf {{reviews_count}} Rezensionen",
                textReviewerName: "Ihr Name",
                textReviewerEmail: "Ihre E-Mail-Adresse",
                textReviewRating: "Deine Bewertung",
                reviewFormHeading: "Was denken Sie über",
                textReviewTitle: "Geben Sie Ihrer Bewertung einen Titel",
                textReviewContent: "Beginnen Sie hier mit dem Schreiben ...",
                textSubmitReview: "Bewertung abgeben",
                textSendingReview: "Bewertung wird gesendet...",
                textReviewSuccess: "Bewertung erfolgreich übermittelt!",
                textReviewFailed: "Etwas ist schief gelaufen!",
                textUploadMediaFailed: "Das Hochladen des Bildes/Videos ist fehlgeschlagen.",
                textRating: "Eine Bewertung ist erforderlich.",
                textValidationName: "Name ist erforderlich.",
                textValidationEmail: "E-Mail-Adresse ist erforderlich.",
                textValidationContent: "Es ist erforderlich, dass der Inhalt der Rezension angegeben wird.",
                textValidationLimitFiles: "Maximal ## Dateien hochladen",
                textValidationLimitVideo: "Ein Video zum Hochladen akzeptiert",
                textAddMedia: "Bild/Video",
                textSortBy: "Sortiere nach",
                textSortByFeatured: "Hervorgehoben",
                textSortByTime: "Neueste",
                textSortByHigh: "Höchste Bewertung",
                textSortByLow: "Niedrigste Bewertung",
                textSortByPhoto: "Foto zuerst",
                textSortHelpful: "Am hilfreichsten",
                textLikeReview: "Hilfreich?",
                textLikeReview1: "Wie",
                textLikeReview2: "Abstimmung",
                textVerified: "Verifiziert",
                textVerified1: "Gekauft",
                textVerified2: "Kauf verifiziert",
                textReview: "rezension",
                textReviews: "rezensionen",
                textSeeReviews: "Sehen Sie sich Kundenrezensionen an",
                textShowMore: "Weitere Bewertungen",
                textShowAll: "Zeige alles",
                textPrevPage: "Vorherige Seite",
                textNextPage: "Nächste Seite",
                textReadMore: "Mehr lesen",
            },
            Arab: {
                textWidgetTitle: "آراء العملاء",
                textSidebar: "★ المراجعات",
                textFeaturedReviews: "المراجعات المميزة",
                textFeaturedTitle: "ما يعتقده عملاؤنا",
                tabTitle: "ما يعتقده عملاؤنا",
                textReviewButton: "اكتب مراجعة",
                textReviewButtonNone: "كن أول من يترك تعليقًا",
                textShopReply: "رد",
                textReviewSummary: "استنادًا إلى {{reviews_count}} مراجعة",
                textReviewerName: "اسمك",
                textReviewerEmail: "عنوان بريدك  الإلكتروني",
                textReviewRating: "تقييمك",
                reviewFormHeading: "ماذا تعتقد بشأن",
                textReviewTitle: "أعط عنوان المراجعة الخاصة بك",
                textReviewContent: "ابدأ الكتابة هنا...",
                textSubmitReview: "إرسال المراجعة",
                textSendingReview: "مراجعة الإرسال...",
                textReviewSuccess: "تم تقديم المراجعة بنجاح!",
                textReviewFailed: "لقد حدث خطأ ما!",
                textUploadMediaFailed: "فشل تحميل الصورة/الفيديو.",
                textRating: "التقييم مطلوب.",
                textValidationName: "الاسم مطلوب.",
                textValidationEmail: "عنوان البريد الإلكتروني مطلوب.",
                textValidationContent: "يجب مراجعة المحتوى.",
                textValidationLimitFiles: "الحد الأقصى لعدد الملفات المرفوعة",
                textValidationLimitVideo: "تم قبول فيديو واحد للتحميل",
                textAddMedia: "صورة/فيديو",
                textSortBy: "فرز حسب",
                textSortByFeatured: "مميز",
                textSortByTime: "الأحدث",
                textSortByHigh: "أعلى تصنيف",
                textSortByLow: "أدنى تصنيف",
                textSortByPhoto: "الصورة الأولى",
                textSortHelpful: "الأكثر فائدة",
                textLikeReview: "متعاون؟",
                textLikeReview1: "يحب",
                textLikeReview2: "تصويت",
                textVerified: "تم التحقق",
                textVerified1: "تم الشراء",
                textVerified2: "تم التحقق من الشراء",
                textReview: "مراجعة",
                textReviews: "المراجعات",
                textSeeReviews: "انظر آراء العملاء",
                textShowMore: "المزيد من المراجعات",
                textShowAll: "جميع المراجعات",
                textPrevPage: "الصفحة السابقة",
                textNextPage: "الصفحة التالية",
                textReadMore: "اقرأ المزيد",
            },
            Spanish: {
                textWidgetTitle: "Reseñas de clientes",
                textSidebar: "★ Reseñas",
                textFeaturedReviews: "Reseñas destacadas",
                textFeaturedTitle: "Lo que la gente está diciendo",
                tabTitle: "Lo que la gente está diciendo",
                textReviewButton: "Escribir una reseña",
                textReviewButtonNone: "Sé el primero en escribir una reseña",
                textShopReply: "Respondió",
                textReviewSummary: "Basado en #raters reseñas",
                textReviewerName: "Su nombre",
                textReviewerEmail: "Tu correo electrónico",
                textReviewRating: "Su calificación",
                reviewFormHeading: "¿Qué opinas sobre esto?",
                textReviewTitle: "Título",
                textReviewContent: "Contenido",
                textSubmitReview: "Enviar reseña",
                textSendingReview: "Reseña enviando...",
                textReviewSuccess: "¡Reseña enviada exitosamente!",
                textReviewFailed: "¡Ups! ¡Algo salió mal!",
                textUploadMediaFailed: "No se pudo cargar la foto/vídeo.",
                textRating: "Por favor danos tu calificación",
                textValidationName: "Por favor ingresa tu nombre",
                textValidationEmail: "Por favor ingrese una dirección de correo electrónico válida",
                textValidationContent: "Por favor ingrese el contenido de la reseña",
                textValidationLimitFiles: "Permitir la carga máxima de ## archivos",
                textValidationLimitVideo: "Permitir sólo la carga de un vídeo",
                textAddMedia: "Añadir foto/vídeo",
                textSortBy: "Ordenar por",
                textSortByFeatured: "Destacado",
                textSortByTime: "Más recientes",
                textSortByHigh: "Calificación más alta",
                textSortByLow: "Calificación más baja",
                textSortByPhoto: "Foto primero",
                textSortHelpful: "Muy útil",
                textLikeReview: "¿Útil?",
                textLikeReview1: "Gustar",
                textLikeReview2: "Votar",
                textVerified: "Verificado",
                textVerified1: "Comprado",
                textVerified2: "Compra verificada",
                textReview: "reseña",
                textReviews: "reseñas",
                textSeeReviews: "Ver reseñas de los clientes",
                textShowMore: "Ver más reseñas",
                textShowAll: "Mostrar todo",
                textPrevPage: "Página anterior",
                textNextPage: "Página siguiente",
                textReadMore: "Leer más",
            },
            Portuguese: {
                textWidgetTitle: "Avaliações de Clientes",
                textSidebar: "★ Avaliações",
                textFeaturedReviews: "Avaliações em destaque",
                textFeaturedTitle: "O que as pessoas estão dizendo",
                tabTitle: "O que as pessoas estão dizendo",
                textReviewButton: "Escrever avaliação",
                textReviewButtonNone: "Seja o primeiro a escrever avaliação",
                textShopReply: "Resposta",
                textReviewSummary: "Com base nas avaliações de #raters",
                textReviewerName: "Seu nome",
                textReviewerEmail: "Seu email",
                textReviewRating: "Sua Classificação",
                reviewFormHeading: "O que você pensa sobre",
                textReviewTitle: "Título",
                textReviewContent: "Contente",
                textSubmitReview: "Enviar avaliação",
                textSendingReview: "Revise o envio...",
                textReviewSuccess: "Avaliação enviada com sucesso!",
                textReviewFailed: "Ops! Algo deu errado!",
                textUploadMediaFailed: "Não foi possível enviar foto/vídeo.",
                textRating: "Por favor, dê-nos a sua classificação",
                textValidationName: "Por favor insira seu nome",
                textValidationEmail: "Por favor insira um endereço de e-mail válido",
                textValidationContent: "Insira o conteúdo da revisão",
                textValidationLimitFiles: "Permitir upload máximo ## de arquivos",
                textValidationLimitVideo: "Permitir apenas o upload de um vídeo",
                textAddMedia: "Adicionar foto/vídeo",
                textSortBy: "Ordenar por",
                textSortByFeatured: "Apresentou",
                textSortByTime: "Mais recente",
                textSortByHigh: "Classificação mais alta",
                textSortByLow: "Classificação mais baixa",
                textSortByPhoto: "Foto primeiro",
                textSortHelpful: "Mais útil",
                textLikeReview: "Útil?",
                textLikeReview1: "Como",
                textLikeReview2: "Voto",
                textVerified: "Verificado",
                textVerified1: "Comprado",
                textVerified2: "Compra verificada",
                textReview: "avaliação",
                textReviews: "avaliações",
                textSeeReviews: "Veja avaliações de clientes",
                textShowMore: "Ver mais avaliações",
                textShowAll: "Mostre tudo",
                textPrevPage: "Página anterior",
                textNextPage: "Próxima página",
                textReadMore: "Mais",
            },
            Dutch: {
                textWidgetTitle: "Klantbeoordelingen",
                textSidebar: "★ Beoordelingen",
                textFeaturedReviews: "Uitgelichte Recensies",
                textFeaturedTitle: "Wat mensen zeggen",
                tabTitle: "Wat mensen zeggen",
                textReviewButton: "Een recensie schrijven",
                textReviewButtonNone: "Wees de eerste die een recensie schrijft",
                textShopReply: "Heeft geantwoord",
                textReviewSummary: "Gebaseerd op Recensies van #raters",
                textReviewerName: "Uw naam",
                textReviewerEmail: "Jouw email",
                textReviewRating: "Jouw beoordeling",
                reviewFormHeading: "Wat vind je van",
                textReviewTitle: "Titel",
                textReviewContent: "Inhoud",
                textSubmitReview: "Review versturen",
                textSendingReview: "Verzenden controleren...",
                textReviewSuccess: "Beoordeling succesvol verzonden!",
                textReviewFailed: "Oeps! Er is iets fout gegaan!",
                textUploadMediaFailed: "Kan foto/video niet uploaden.",
                textRating: "Geef ons uw beoordeling",
                textValidationName: "Voer uw naam in",
                textValidationEmail: "Voer een geldig e-mailadres in",
                textValidationContent: "Voer de recensie-inhoud in",
                textValidationLimitFiles: "Sta maximale upload van ## bestanden toe",
                textValidationLimitVideo: "Sta slechts één video-upload toe",
                textAddMedia: "Voeg foto/video toe",
                textSortBy: "Sorteer op",
                textSortByFeatured: "Uitgelicht",
                textSortByTime: "Meest recente",
                textSortByHigh: "Hoogste beoordeling",
                textSortByLow: "Laagste beoordeling",
                textSortByPhoto: "Foto eerst",
                textSortHelpful: "Meest behulpzaam",
                textLikeReview: "Behulpzaam?",
                textLikeReview1: "Leuk vinden",
                textLikeReview2: "Stemmen",
                textVerified: "Geverifieerd",
                textVerified1: "Gekocht",
                textVerified2: "Aankoop geverifieerd",
                textReview: "recensie",
                textReviews: "Recensies",
                textSeeReviews: "Zie klantrecensies",
                textShowMore: "Bekijk meer recensies",
                textShowAll: "Toon alles",
                textPrevPage: "Vorige pagina",
                textNextPage: "Volgende pagina",
                textReadMore: "Lees verder",
            },
            Italian: {
                textWidgetTitle: "Recensioni dei clienti",
                textSidebar: "★ Recensioni",
                textFeaturedReviews: "Recensioni in primo piano",
                textFeaturedTitle: "Cosa dice la gente",
                tabTitle: "Cosa dice la gente",
                textReviewButton: "Scrivi una recensione",
                textReviewButtonNone: "Puoi essere il primo a scrivere una recensione",
                textShopReply: "Risposto",
                textReviewSummary: "Basato sulle recensioni di #raters",
                textReviewerName: "Il tuo nome",
                textReviewerEmail: "La tua email",
                textReviewRating: "Il tuo Valutazione",
                reviewFormHeading: "Cosa ne pensi?",
                textReviewTitle: "Titolo",
                textReviewContent: "Contenuto",
                textSubmitReview: "Invia recensione",
                textSendingReview: "Invio recensione...",
                textReviewSuccess: "Recensione inviata con successo!",
                textReviewFailed: "Ops! Qualcosa è andato storto!",
                textUploadMediaFailed: "Impossibile caricare foto/video.",
                textRating: "Per favore, dacci la tua valutazione",
                textValidationName: "Per favore inserisci il tuo nome",
                textValidationEmail: "Inserisci un indirizzo email valido",
                textValidationContent: "Inserisci il contenuto della recensione",
                textValidationLimitFiles: "Consenti il caricamento massimo di ## file",
                textValidationLimitVideo: "Consenti solo il caricamento di un video",
                textAddMedia: "Aggiungi foto/video",
                textSortBy: "Ordina per",
                textSortByFeatured: "In primo piano",
                textSortByTime: "Piu recente",
                textSortByHigh: "Voto più alto",
                textSortByLow: "Voto più basso",
                textSortByPhoto: "Prima la foto",
                textSortHelpful: "Molto utile",
                textLikeReview: "Utile?",
                textLikeReview1: "Come",
                textLikeReview2: "Votazione",
                textVerified: "Verificato",
                textVerified1: "Acquistato",
                textVerified2: "Acquisto verificato",
                textReview: "recensione",
                textReviews: "recensioni",
                textSeeReviews: "Vedi le recensioni dei clienti",
                textShowMore: "Vedi più recensioni",
                textShowAll: "Mostra tutto",
                textPrevPage: "Pagina precedente",
                textNextPage: "Pagina successiva",
                textReadMore: "Di più",
            },
        },
    });

const buildPreviewUI = ({
    parent,
    config,
    reviews,
    summary,
    isMobile,
    isFeaturedWidget,
    subscriptionPlan,
    removeBranding,
    enableLogs,
    reviewsWithMedia,
    shopSummary
}) => {
    Dinosaur.isUIPreview = true;
    Dinosaur.removeBranding = removeBranding;
    Dinosaur.enableLogs = enableLogs;
    Dinosaur.init({
        action: () => {
            Dinosaur.buildStyles();
            Dinosaur.buildReviewsWidget(Dinosaur.container);
        },
        data: {
            parent,
            config,
            reviews,
            reviewsWithMedia,
            summary,
            shopSummary,
            isMobile,
            isFeaturedWidget,
            subscriptionPlan,
            pageType: "product",
            data: {
                page: 1,
                filter: "all",
                sort: "featured",
                productImage: `https://dinosaur-source.nyc3.cdn.digitaloceanspaces.com/images/t-shirt2.webp`,
                productName: "Graphic Tees Shirt"
            },
        },
    });
};

try {
    $ = require("jquery");
    moment = require("moment");
    exports.__esModule = true;
    exports.default = buildPreviewUI;
} catch {
    if (window.DinosaurReviews === undefined) {
        window.DinosaurReviews = true;
        if (
            window["_dinosaurConfig"]?.waitForPageReady &&
            !(
                document.readyState === "complete" ||
                document.readyState === "interactive"
            )
        ) {
            window.addEventListener("load", Dinosaur.start);
        } else (async () => Dinosaur.start())();
        if (navigator.userAgent?.includes("moto g power")) {
            const delayTo = new Date().getTime() + 500;
            while (new Date().getTime() < delayTo) { }
        }
    }
}
