export function adjustPreviewDesktop(midStaticHolder, menuRightSide) {
    console.log('Function adjustPreviewDesktop started');

    let simpleContainer;
    let letzCenter;
    let transformScale;
    let dimensionWidth;
    let dimensionHeight;
    let newScale;
    let menuRightSideTarget;

    const getDeviceStyles = () => {
        return {
            width: '1920px',
            height: '1080px',
            transform: 'scale(0.6)',
            aspectRatio: '16/9',
        };
    };

    const startingStyles = getDeviceStyles();
    console.log('startingStyles:', startingStyles);

    if (!startingStyles) {
        transformScale = 0.3;
        dimensionWidth = 375;
        dimensionHeight = 667;
    } else {
        dimensionWidth = Number(startingStyles.width.replace('px', ''));
        dimensionHeight = Number(startingStyles.height.replace('px', ''));
        const scaleStr = startingStyles.transform.replace('scale(', '').replace(')', '');
        transformScale = Number(scaleStr);
    }

    const startingWidth = dimensionWidth;
    const startingHeight = dimensionHeight;

    console.log('Initial Dimensions (no scale):', { startingWidth, startingHeight });

    letzCenter = midStaticHolder;
    simpleContainer = document.getElementById('holderForStatic');
    menuRightSideTarget = menuRightSide;

    if (!letzCenter) {
        console.warn('letzCenter not found!');
        return;
    }

    const simpleContainerWidth = simpleContainer?.getBoundingClientRect().width;
    const simpleContainerHeight = simpleContainer?.getBoundingClientRect().height;
    const letzCenterWidth = letzCenter?.getBoundingClientRect().width;
    const letzCenterHeight = letzCenter?.getBoundingClientRect().height;

    const paddingX = (letzCenterWidth * 10) / 100;
    const paddingY = (letzCenterHeight * 10) / 100;
    const maxLetzCenterWidth = letzCenterWidth - paddingX;
    const maxLetzCenterHeight = letzCenterHeight - paddingY;

    console.log('Max Usable Center Size:', { maxLetzCenterWidth, maxLetzCenterHeight });

    newScale = transformScale;

    // Only adjust the scale based on available space
    while (
        startingWidth * newScale > maxLetzCenterWidth ||
        startingHeight * newScale > maxLetzCenterHeight
    ) {
        newScale = newScale - 0.01;
    }

    // Don't shrink too much
    newScale = Math.max(newScale, 0.1);

    console.log('Final Scale:', newScale);
    console.log('====== DTadjustPreview DONE ======');

    return {
        width: `${startingWidth}px`,
        height: `${startingHeight}px`,
        transform: `scale(${newScale})`,
        transformOrigin: 'center',
        aspectRatio: `${startingStyles.aspectRatio}`,
    };
}
