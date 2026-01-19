// teaching.js
document.addEventListener('DOMContentLoaded', function() {
    const teachingList = document.querySelector('.teaching-list');
    const timeline = document.querySelector('.timeline');

    // Sample teaching data (replace with your actual data)
        const courses = [
            {
                title: "Single and Multi Variable Calculus",
                subtitle: "Graduate Course @ Dayananda Sagar University [B.Tech]",
                date: "2026-01-21",
                description:
                    "I am currently teaching Single and Multivariable Calculus to undergraduate students, covering limits and continuity, differentiation and applications of derivatives, Taylor and Maclaurin series, partial differentiation, maxima and minima of functions of several variables, multiple integrals, Jacobians, and vector calculus including gradient, divergence, and curl. The course emphasizes strong conceptual understanding along with problem-solving techniques, supported by graphical interpretation and computational demonstrations using Python and MATLAB for better visualization and practical understanding.",
        
                feedbackScore: null,
                maxScore: 5,
        
                feedbacks: ["On-Going"],
        
            },
        
            {
                title: "Linear Algebra and Differential Equations",
                subtitle: "Graduate Course @ Dayananda Sagar University [B.Tech]",
                date: "2025-06-01",
                description:
                    "I taught Linear Algebra and Differential Equations for B.Tech (Engineering Mathematics) students at Dayananda Sagar University, covering systems of linear equations, REF/RREF, LU decomposition, vector spaces and subspaces, linear transformations, inner product spaces, Gram–Schmidt process, eigenvalues and eigenvectors, matrix diagonalization, and ordinary differential equations, with Python and MATLAB demonstrations to illustrate concepts, algorithms, and engineering applications.",
        
                feedbackScore: 4.6,
                maxScore: 5,
        
                feedbacks: [
                    "Manoj sir is a fabulous teacher. He explains concepts very clearly and ensures everyone understands.",
                    "Absolutely amazing in teaching. Concepts were easy to understand in class itself, and the revision videos helped a lot during exams.",
                    "This maths course was very well structured. Concepts were explained clearly with good examples, which improved my confidence in maths.",
                    "Felt blessed to have you as our math professor and class advisor. We were really lucky to have you.",
                    "I was able to understand every topic and write my semester exam confidently. Thanks to Manoj sir.",
                    "Sir, I started loving calculus because of the way you taught it. Thank you so much.",
                    "And many more..."
                ]
            },
        
            {
                title: "Higher Mathematics on YouTube",
                subtitle: "Complete Course @ MS MATHS [B.Sc./M.Sc./MA Mathematics]",
                date: "2021-01-01",
                description:
                    "MS MATHS is my YouTube channel dedicated to Higher Mathematics and Computational Learning, featuring 1500+ educational videos. The channel covers M.Sc./M.A. Mathematics, B.Sc./B.A./B.Tech Mathematics, Physics, Python and C Programming, IIT JAM and CUET-PG preparation, PYQ solutions, and full course-oriented playlists.",
        
                feedbackScore: 4.9,
                maxScore: 5,
        
                feedbacks: [
                    "The only source that helped me in my B.Sc. the best content for semester system and yearly system both with video lecture and hand written notes.",
                    "I was so tensed about my B.Sc but after subscribing @MsMaths I was so relaxed. Every topic is available with easy explanation.",
                    "Thanks for helping us in difficult times. I really appreciate your dedication.",
                    "This channel and everything related to it was really helpful.",
                    "Very very helpful. We totally depend on MS Maths during exam time.",
                    "And many more..."
                ]
            },
        
            {
                title: "Application of Python",
                subtitle: "Short Term Course @ Anant – The Mathematical Society, NIT Kurukshetra",
                date: "2024-11-01",
                description:
                    "This short term course focuses on applications of Python in Mathematics, including Linear Algebra, Numerical Analysis, and Machine Learning for M.Sc. Mathematics and B.Tech students.",
        
                feedbackScore: 4.5,
                maxScore: 5,
                feedbacks: []
            },
        
            {
                title: "Linear Algebra",
                subtitle: "Online Coaching [B.Sc. JNVU Jodhpur & University of Delhi]",
                date: "2024-05-01",
                description:
                    "This course focused on Linear Algebra including matrices, eigenvalues, eigenvectors, vector spaces, and linear transformations. Conducted via Google Meet for 3 months.",
        
                feedbackScore: null,
                maxScore: 5,
                feedbacks: []
            },
        
            {
                title: "Differential Equations",
                subtitle: "Online Coaching [B.Sc. JNVU Jodhpur & University of Delhi]",
                date: "2024-05-01",
                description:
                    "Course covered Linear Differential Equations, Exact Equations, and Second Order Differential Equations with extensive problem-solving sessions.",
        
                feedbackScore: null,
                maxScore: 5,
                feedbacks: []
            },
        
            {
                title: "Group Theory",
                subtitle: "Online Coaching [B.Sc. JNVU Jodhpur & University of Delhi]",
                date: "2024-05-01",
                description:
                    "Course focused on fundamental concepts of Group Theory for B.Sc. students. Conducted online for 3 months.",
        
                feedbackScore: null,
                maxScore: 5,
                feedbacks: []
            }
        ];


    function renderCourses() {
        teachingList.innerHTML = '';
        courses.forEach(course => {
            const courseCard = createCourseCard(course);
            teachingList.appendChild(courseCard);
        });
    }

    function createCourseCard(course) {
        const card = document.createElement('div');
        card.classList.add('course-card');

        const header = document.createElement('div');
        header.classList.add('course-header');

        const titleSection = document.createElement('div');
        titleSection.classList.add('course-title-section');

        const title = document.createElement('h2');
        title.classList.add('course-title');
        title.textContent = course.title;

        const subtitle = document.createElement('p');
        subtitle.classList.add('course-subtitle');
        subtitle.textContent = course.subtitle;

        titleSection.appendChild(title);
        titleSection.appendChild(subtitle);

        const date = document.createElement('div');
        date.classList.add('course-date');
        date.textContent = formatDate(course.date);

        header.appendChild(titleSection);
        header.appendChild(date);

        const descriptionSection = document.createElement('div');
        descriptionSection.classList.add('course-description-section');

        const description = document.createElement('p');
        description.classList.add('course-description');
        description.textContent = course.description;

        
        
        if (!isNaN(course.feedbackScore)) {
            const feedbackCircle = createFeedbackCircle(course.feedbackScore, course.maxScore);
            descriptionSection.appendChild(description);
            descriptionSection.appendChild(feedbackCircle);
        }
        else{
            descriptionSection.appendChild(description);
        }

        const feedbackToggle = document.createElement('button');
        feedbackToggle.classList.add('feedback-toggle');
        feedbackToggle.textContent = 'Show Feedback';

        if (course.feedbacks.length === 0) {
            feedbackToggle.style.display = 'none';
        }

        const feedbackSection = createFeedbackSection(course.feedbacks);

        feedbackToggle.addEventListener('click', () => {
            if (feedbackSection.style.display === 'none' || feedbackSection.style.display === '') {
                feedbackSection.style.display = 'block';
                feedbackToggle.textContent = 'Hide Feedback';
            } else {
                feedbackSection.style.display = 'none';
                feedbackToggle.textContent = 'Show Feedback';
            }
        });

        card.appendChild(header);
        card.appendChild(descriptionSection);
        card.appendChild(feedbackToggle);
        card.appendChild(feedbackSection);

        return card;
    }

    function createFeedbackCircle(score, maxScore) {
        const ratingContainer = document.createElement('div');
        ratingContainer.classList.add('star-rating');
    
        const starsContainer = document.createElement('div');
        starsContainer.classList.add('stars');
    
        // Create 5 stars
        for (let i = 1; i <= 5; i++) {
            const starWrapper = document.createElement('div');
            starWrapper.classList.add('star-wrapper');
    
            const starBackground = document.createElement('span');
            starBackground.classList.add('star', 'star-background');
            starBackground.innerHTML = '★'; // Unicode solid star
    
            const starForeground = document.createElement('span');
            starForeground.classList.add('star', 'star-foreground');
            starForeground.innerHTML = '★'; // Unicode solid star
    
            // Calculate fill percentage for this star
            let fillPercentage = Math.max(0, Math.min(100, (score - (i - 1)) * 100));
            starForeground.style.width = `${fillPercentage}%`;
    
            starWrapper.appendChild(starBackground);
            starWrapper.appendChild(starForeground);
            starsContainer.appendChild(starWrapper);
        }
    
        ratingContainer.appendChild(starsContainer);
    
        // Add the score/maxScore text below the stars
        const scoreText = document.createElement('div');
        scoreText.classList.add('score-text');
        scoreText.textContent = `${score.toFixed(1)}/${maxScore}`;
        ratingContainer.appendChild(scoreText);
    
        return ratingContainer;
    }

    function createFeedbackSection(feedbacks) {
        const section = document.createElement('div');
        section.classList.add('feedback-section');

        const carousel = document.createElement('div');
        carousel.classList.add('feedback-carousel');

        feedbacks.forEach((feedback, index) => {
            const feedbackCard = document.createElement('div');
            feedbackCard.classList.add('feedback-card');
            feedbackCard.style.display = index === 0 ? 'block' : 'none';

            const feedbackText = document.createElement('p');
            feedbackText.classList.add('feedback-text');
            feedbackText.textContent = feedback;

            feedbackCard.appendChild(feedbackText);
            carousel.appendChild(feedbackCard);
        });

        const navDots = document.createElement('div');
        navDots.classList.add('feedback-nav');

        feedbacks.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.classList.add('feedback-nav-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => showFeedback(carousel, index));
            navDots.appendChild(dot);
        });

        const leftArrow = document.createElement('i');
        leftArrow.classList.add('fas', 'fa-chevron-left', 'feedback-arrow', 'left');

        leftArrow.addEventListener('click', () => navigateFeedback(carousel, -1));

        const rightArrow = document.createElement('i');
        rightArrow.classList.add('fas', 'fa-chevron-right', 'feedback-arrow', 'right');
        rightArrow.addEventListener('click', () => navigateFeedback(carousel, 1));

        section.appendChild(leftArrow);
        section.appendChild(carousel);
        section.appendChild(rightArrow);
        section.appendChild(navDots);

        return section;
    }

    function showFeedback(carousel, index) {
        const feedbacks = carousel.querySelectorAll('.feedback-card');
        feedbacks.forEach((feedback, i) => {
            feedback.style.display = i === index ? 'block' : 'none';
        });

        const dots = carousel.parentNode.querySelectorAll('.feedback-nav-dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    function navigateFeedback(carousel, direction) {
        console.log('navigateFeedback');
        const feedbacks = carousel.querySelectorAll('.feedback-card');
        let activeIndex = Array.from(feedbacks).findIndex(feedback => feedback.style.display === 'block');
        let newIndex = (activeIndex + direction + feedbacks.length) % feedbacks.length;
        showFeedback(carousel, newIndex);
    }

    function renderTimeline() {
        timeline.innerHTML = '';
        const years = new Set(courses.map(course => new Date(course.date).getFullYear()));
        Array.from(years).sort((a, b) => b - a).forEach(year => {
            const timelineItem = document.createElement('div');
            timelineItem.classList.add('timeline-item');
            timelineItem.textContent = year;
            timelineItem.addEventListener('click', () => {
                const yearCourses = courses.filter(course => new Date(course.date).getFullYear() === year);
                console.log(yearCourses);
                if (yearCourses.length > 0) {
                    // console.log("Holaaa", yearCourses[0][0].element);
                    yearCourses[0].element.scrollIntoView({ behavior: 'smooth' });
                }
            });
            timeline.appendChild(timelineItem);
        });
    }

    function formatDate(dateString) {
        const options = { year: 'numeric', month: 'long' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    }

    renderCourses();
    renderTimeline();
});
