import { type CSSProperties, type PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Drawer.css";

export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  anchor?: "left" | "top" | "right" | "bottom";
  isBackdrop?: boolean;
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  zIndex?: CSSProperties["zIndex"];
}

const Drawer = (props: PropsWithChildren<DrawerProps>) => {
  const {
    anchor = "left",
    isOpen,
    isBackdrop = true,
    onClose,
    width,
    height,
    zIndex = 1,
    children,
  } = props;

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") {
        return;
      }

      onClose();
    };

    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const anchorStyle = (anchor: string) => {
    if (anchor === "left")
      return {
        left: 0,
      };

    if (anchor === "top")
      return {
        top: 0,
        left: 0,
        right: 0,
        height: "auto",
        maxHeight: "100%",
      };

    if (anchor === "right")
      return {
        right: 0,
      };

    return {
      top: "auto",
      left: 0,
      bottom: 0,
      right: 0,
      height: "auto",
      maxHeight: "100%",
    };
  };

  const anchorAnimation = (anchor: string) => {
    return {
      animation: `${
        anchor === "left"
          ? "ruluSlideRight"
          : anchor === "top"
          ? "ruluSlideDown"
          : anchor === "right"
          ? "ruluSlideLeft"
          : "ruluSlideUp"
      } 0.6s ease-in-out forwards`,
    };
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div role="dialog" aria-modal>
            {isBackdrop && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
                onClick={onClose}
              />
            )}

            <div
              style={{
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                flex: "1 0 auto",
                zIndex,
                position: "fixed",
                top: 0,
                outline: 0,
                overflow: "hidden",
                ...anchorStyle(anchor),
              }}
            >
              <div
                style={{
                  width: width
                    ? width
                    : anchor === "top" || anchor === "bottom"
                    ? "auto"
                    : 250,
                  height: height
                    ? height
                    : anchor === "left" || anchor === "right"
                    ? "100%"
                    : "auto",
                  backgroundColor: "white",
                  ...anchorAnimation(anchor),
                }}
                onClick={onClose}
              >
                {children}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Drawer;
