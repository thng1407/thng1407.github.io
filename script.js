Fancybox.bind("[data-fancybox]", {
    Image: {
        autoScale: true,
      Panzoom: {
        zoomFriction: 0.2,
        baseScale: 2,
        maxScale: function () {
          return 3;
        },
      },
    },
  });