import React, { useEffect } from 'react'
import "./events.css"
export default function Events() {

    useEffect(() => {
        const initSlider = () => {
            const imageList = document.querySelector(".slider-wrapper .image-list");
            const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
            const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
            const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
            const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

            
            scrollbarThumb.addEventListener("mousedown", (e) => {
                const startX = e.clientX;
                const thumbPosition = scrollbarThumb.offsetLeft;
                const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

               
                const handleMouseMove = (e) => {
                    const deltaX = e.clientX - startX;
                    const newThumbPosition = thumbPosition + deltaX;

                    const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
                    const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

                    scrollbarThumb.style.left = `${boundedPosition}px`;
                    imageList.scrollLeft = scrollPosition;
                }

             
                const handleMouseUp = () => {
                    document.removeEventListener("mousemove", handleMouseMove);
                    document.removeEventListener("mouseup", handleMouseUp);
                }

                
                document.addEventListener("mousemove", handleMouseMove);
                document.addEventListener("mouseup", handleMouseUp);
            });

           
            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "prev-slide" ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
                });
            });

            const handleSlideButtons = () => {
                slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
                slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
            }

            const updateScrollThumbPosition = () => {
                const scrollPosition = imageList.scrollLeft;
                const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
                scrollbarThumb.style.left = `${thumbPosition}px`;
            }

           
            imageList.addEventListener("scroll", () => {
                updateScrollThumbPosition();
                handleSlideButtons();
            });
        }

        window.addEventListener("resize", initSlider);
        window.addEventListener("load", initSlider);
    }, [])
    
    return (
        <>
        <h1 className="heading">Events</h1>
            <div className="container">
        
                <div className="slider-wrapper">
                    <button id="prev-slide" className="slide-button material-symbols-rounded">
                      C
                    </button>
                    <ul className="image-list">
                        <img className="image-item" src="https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="img-1"/>
                        
                        <img className="image-item" src="https://plus.unsplash.com/premium_photo-1681400690940-8eff232a8f7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="img-2" />
                        <img className="image-item" src="https://w0.peakpx.com/wallpaper/162/193/HD-wallpaper-amdi-happy-engineers-day.jpg" alt="img-3" />
                        <img className="image-item" src="https://images.unsplash.com/photo-1569502958480-f55a56559483?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="img-4" />
                        <img className="image-item" src="https://images.unsplash.com/photo-1469564810962-ff989827328e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="img-5" />
                        <img className="image-item" src="https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="img-6" />
                       
                    </ul>
                    <button id="next-slide" className="slide-button material-symbols-rounded">
                        C
                    </button>   
                </div>
                <div className="slider-scrollbar">
                    <div className="scrollbar-track">
                        <div className="scrollbar-thumb" />
                    </div>
                </div>
            </div>
        </>

    )
}
