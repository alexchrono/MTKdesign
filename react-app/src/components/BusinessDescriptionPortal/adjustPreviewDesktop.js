export function adjustPreviewDesktop(midStaticHolder, menuRightSide) {
    console.log('Function adjustPreviewDesktop started');

    let simpleContainer;
    let letzCenter;
    let transformScale;
    let dimensionWidth;
    let dimensionHeight;
    let trimTheWidth;
    let trimTheHeight;
    let growTheWidth;
    let growTheHeight;
    let finalHeight;
    let finalWidth;
    let menuRightSideTarget;

    const getDeviceStyles = () => {
        // Simplified for testing
        return {
            width: '1024px',
            height: '768px',
            transform: 'scale(0.6)',
            aspectRatio: '4/3',
        };
        

        // Full version kept for later use:
        /*
        switch (activeMediaDevice) {
            case 'WideScreen':
                return {
                    width: '1024px',
                    height: '768px',
                    transform: 'scale(0.6)',
                    aspectRatio: '4/3',
                };
            case 'Laptop':
                return {
                    width: '1920px',
                    height: '1080px',
                    transform: 'scale(0.6)',
                    aspectRatio: '16/9',
                };
            case 'Cell':
                return {
                    width: '375px',
                    height: '667px',
                    transform: 'scale(0.8)',
                    aspectRatio: '375/667',
                };
            default:
                return {
                    border: '20px solid red',
                    width: '1024px',
                    height: '768px',
                    transform: 'scale(0.8)',
                    aspectRatio: '4/3',
                };
        }
        */
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

    console.log('Initial Dimensions:', { dimensionWidth, dimensionHeight, transformScale });

    const heightTimesThisGetsWidth = dimensionWidth / dimensionHeight;
    const widthTimesThisGetsHeight = dimensionHeight / dimensionWidth;

    const startingHeight = dimensionHeight * transformScale;
    const startingWidth = dimensionWidth * transformScale;

    console.log('Starting (scaled) Width/Height:', { startingWidth, startingHeight });

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

    console.log('letzCenter Dimensions:', { letzCenterWidth, letzCenterHeight });

    const paddingX = (letzCenterWidth * 10) / 100;
    const paddingY = (letzCenterHeight * 10) / 100;
    const maxLetzCenterWidth = letzCenterWidth - paddingX;
    const maxLetzCenterHeight = letzCenterHeight - paddingY;

    console.log('Max Usable Center Size:', { maxLetzCenterWidth, maxLetzCenterHeight });

    let newScale = transformScale;

    if (startingWidth > maxLetzCenterWidth || startingHeight > maxLetzCenterHeight) {
        console.log('Resizing: TRIMMING required');
        if (startingWidth > maxLetzCenterWidth) {
            trimTheWidth = (startingWidth - maxLetzCenterWidth);
        }
        if (startingHeight > maxLetzCenterHeight) {
            trimTheHeight = (startingHeight - maxLetzCenterHeight);
        }

        if (trimTheWidth && trimTheHeight) {
            console.log('Both dimensions need trimming');
            if (heightTimesThisGetsWidth >= widthTimesThisGetsHeight) {
                finalWidth = (startingWidth - trimTheWidth) - 1;
                finalHeight = finalWidth * widthTimesThisGetsHeight;
            } else {
                finalHeight = (startingHeight - trimTheHeight) - 1;
                finalWidth = finalHeight * heightTimesThisGetsWidth;
            }
        } else if (trimTheWidth) {
            console.log('Trimming width only');
            finalWidth = (startingWidth - trimTheWidth) - 1;
            finalHeight = finalWidth * widthTimesThisGetsHeight;
        } else if (trimTheHeight) {
            console.log('Trimming height only');
            finalHeight = (startingHeight - trimTheHeight) - 1;
            finalWidth = heightTimesThisGetsWidth * finalHeight;
        }

        newScale = 1;
        while (finalWidth * newScale > maxLetzCenterWidth || finalHeight * newScale > maxLetzCenterHeight) {
            newScale = newScale - 0.01;
        }

        finalWidth = finalWidth * newScale;
        finalHeight = finalHeight * newScale;
    } else if (startingWidth < maxLetzCenterWidth && startingHeight < maxLetzCenterHeight) {
        console.log('Resizing: EXPANSION possible');
        let differenceHeight = (maxLetzCenterHeight - startingHeight);
        let differenceWidth = (maxLetzCenterWidth - startingWidth);

        if (heightTimesThisGetsWidth >= widthTimesThisGetsHeight) {
            growTheWidth = differenceWidth - 1;
            finalWidth = startingWidth + growTheWidth;
            finalHeight = finalWidth * widthTimesThisGetsHeight;
        } else {
            growTheHeight = differenceHeight - 1;
            finalHeight = startingHeight + growTheHeight;
            finalWidth = heightTimesThisGetsWidth * finalHeight;
        }

        newScale = 1;
        while (finalWidth * newScale > maxLetzCenterWidth || finalHeight * newScale > maxLetzCenterHeight) {
            newScale = newScale - 0.01;
        }

        finalWidth = finalWidth * newScale;
        finalHeight = finalHeight * newScale;
    }

    letzCenter.style.scale = '1';
    console.log('Final Dimensions:', { finalWidth, finalHeight, newScale });
    console.log('====== DTadjustPreview DONE ======');

    return {
        width: `${finalWidth}px`,
        height: `${finalHeight}px`,
        transform: `scale(${1})`,
        transformOrigin: 'top left',
        aspectRatio: `${startingStyles.aspectRatio}`
    };
}
