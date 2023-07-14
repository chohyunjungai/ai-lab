window.addEventListener('hashchange', function () {
  loadPage(location.hash)
})

function loadPage(hash) {
  const main = document.getElementById('main')

  switch (hash) {
    case '#home':
      main.innerHTML = `
            <div class="home-content">
              <h1>Welcome to My Website!</h1>
              <p>Hello, I'm [Your Name]. I'm a [Your Role]. Here, you'll find all the information about my work, portfolio, and recent updates.</p>
    
              <!-- Insert YouTube video -->
              <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EOFOqehQzow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>`
      break
    case '#about':
      main.innerHTML = `
            <div class="timeline">
              <div class="timeline-item">
                <span class="timeline-date">2018</span>
                <p class="timeline-content">컴퓨터 공학과 입학</p>
              </div>
              <div class="timeline-item">
                <span class="timeline-date">2021</span>
                <p class="timeline-content">인턴십을 통한 실무 경험 쌓기</p>
              </div>
              <div class="timeline-item">
                <span class="timeline-date">2022</span>
                <p class="timeline-content">개인 프로젝트 진행 중</p>
              </div>
            </div>`
      break

    case '#portfolio':
      main.innerHTML = `
          <div class="card-container">
            <div class="card">
              <img src="images/sample1.jpg" alt="Project 1">
              <h3>Project 1</h3>
              <p>This is a description of Project 1.</p>
            </div>
            <div class="card">
              <img src="images/sample2.jpg" alt="Project 2">
              <h3>Project 2</h3>
              <p>This is a description of Project 2.</p>
            </div>
            <div class="card">
              <img src="images/sample3.jpg" alt="Project 3">
              <h3>Project 3</h3>
              <p>This is a description of Project 3.</p>
            </div>
          </div>`
      break

    case '#gallery':
      main.innerHTML = `
          <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src="images/sample4.jpg" alt="First slide">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Slide 1</h5>
                  <p>Image sample 1 description.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images/sample5.jpg" alt="Second slide">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Slide 2</h5>
                  <p>Image sample 2 description.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src="images/sample6.jpg" alt="Third slide">
                <div class="carousel-caption d-none d-md-block">
                  <h5>Slide 3</h5>
                  <p>Image sample 3 description.</p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>`
      break

    case '#sns':
      main.innerHTML = `
          <div class="sns-container">
            <h2>Contact & Social Media</h2>
            <div class="sns-icons">
              <!-- YouTube Icon and Link -->
              <a href="https://www.youtube.com/@cho_ai_lab" target="_blank">
                <i class="fab fa-youtube fa-3x"></i>
              </a>
              
              <!-- Email Icon and Link -->
              <a href="mailto:enjoymywork@naver.com" target="_blank">
                <i class="fas fa-envelope fa-3x"></i>
              </a>
            </div>
            <div class="sns-description">
              <p><strong>Education:</strong> Graduated from the Department of Education, Sungkyunkwan University</p>
              <p><strong>Certification:</strong> 2nd Grade Teacher Certification in General Society</p>
              <p><strong>Achievements:</strong> Completed Hankyoreh Picture Book School</p>
              <p><strong>Current Work:</strong> Preparing to publish an e-book for teenagers on ChatGPT, AI Custom Picture Book Teacher</p>
            </div>
          </div>`
      break

    default:
      main.innerHTML = `
            <div class="home-content">
              <h1>Welcome to My Website!</h1>
              <p>Hello, I'm [Your Name]. I'm a [Your Role]. Here, you'll find all the information about my work, portfolio, and recent updates.</p>
    
              <!-- Insert YouTube video -->
              <div class="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/EOFOqehQzow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>`
  }
}

// Load the initial page
loadPage(location.hash)
