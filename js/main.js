/**
 * WEDLUX - Wedding Dress Website JavaScript
 * Main functionality for wedding dress website
 */

// DOM Elements
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');
const paginationDots = document.querySelectorAll('.pagination-dot');
const productCards = document.querySelectorAll('.product-card');

// Mobile menu toggle
function toggleMobileMenu() {
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
}

// Pagination functionality
function handlePagination(index) {
    // Remove active class from all dots
    paginationDots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Add active class to clicked dot
    paginationDots[index].classList.add('active');
    
    // Here you would implement slider functionality to change content
    // For example:
    // const slides = document.querySelectorAll('.hero-slide');
    // slides.forEach(slide => slide.style.display = 'none');
    // slides[index].style.display = 'block';
    
    console.log(`Switched to slide ${index + 1}`);
}

// Product card hover effects
function setupProductHoverEffects() {
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
}

// Initialize all event listeners
function initEventListeners() {
    // Mobile menu
    menuButton.addEventListener('click', toggleMobileMenu);
    
    // Pagination
    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', () => handlePagination(index));
    });
    
    // Product hover effects
    setupProductHoverEffects();
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (event) => {
        if (navLinks.classList.contains('active') && 
            !event.target.closest('.nav-links') && 
            !event.target.closest('.menu-button')) {
            navLinks.classList.remove('active');
        }
    });
}

// Responsive height adjustments
function adjustMobileHeight() {
    if (window.innerWidth <= 992) {
        const mobileElement = document.querySelector('.mobile-mockup');
        if (mobileElement) {
            // Adjust for smaller screens
            mobileElement.style.height = '480px';
        }
    }
}

// Initialize on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
    initEventListeners();
    adjustMobileHeight();
    
    // Adjust mobile height on window resize
    window.addEventListener('resize', adjustMobileHeight);
});