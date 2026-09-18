# DECISIONS.md - SkillSwap Project Reasoning

### Decision Point 1: Client-Side State Management vs. Full Backend DB
* **Decision:** Used LocalStorage and JavaScript objects instead of a complex backend database.
* **Reasoning:** Minimizes setup overhead and deployment failure points during a 24-hour hackathon while ensuring quick, reliable UI responses for search and booking features.

### Decision Point 2: Marketplace Trust & Creator Verification
* **Decision:** Implemented a lightweight skill tag system paired with simulated review ratings on creator cards.
* **Reasoning:** Helps clients quickly assess creator credibility without requiring complex third-party identity verification APIs.

### Decision Point 3: Direct Booking Form vs. Real-Time Chat System
* **Decision:** Implemented a single-click interactive booking modal with instant confirmation.
* **Reasoning:** Streamlines user interaction to reduce conversion friction for gig bookings within the initial prototype scope.