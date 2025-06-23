// AI Chatbot Timeline Data
const aiData = {
  "chatgpt": {
    "name": "ChatGPT",
    "company": "OpenAI",
    "color": "#10a37f",
    "launch_date": "2022-11",
    "korean_users": "1092만명",
    "market_share": "34%",
    "milestones": [
      {
        "date": "2022-11",
        "title": "ChatGPT 첫 출시",
        "description": "OpenAI에서 GPT-3.5 기반 AI 챗봇 출시"
      },
      {
        "date": "2024-02",
        "title": "1억 8천만 사용자 달성",
        "description": "전 세계 AI 챗봇 시장을 주도하는 사용자 기반 확보"
      },
      {
        "date": "2025-03",
        "title": "한국 월간 사용자 1092만명",
        "description": "한국에서 역대 최고치를 달성"
      },
      {
        "date": "2025-04",
        "title": "GPT-4.1 시리즈 출시",
        "description": "SWE-bench Verified에서 54.6% 정확도 기록"
      }
    ]
  },
  "gemini": {
    "name": "Gemini",
    "company": "Google",
    "color": "#4285f4",
    "launch_date": "2023-03",
    "korean_users": "집계되지 않음",
    "market_share": "12%",
    "milestones": [
      {
        "date": "2023-03",
        "title": "Google Gemini 출시",
        "description": "멀티모달 생성형 AI 모델로 텍스트, 이미지, 오디오, 비디오 처리"
      },
      {
        "date": "2023-06",
        "title": "다양한 버전 개발",
        "description": "Gemini Ultra, Pro, Flash, Nano 버전 출시"
      },
      {
        "date": "2024-01",
        "title": "Gemini 1.5 Pro 출시",
        "description": "최대 100만 개의 토큰 처리 능력 보유"
      },
      {
        "date": "2025-01",
        "title": "멀티모달 기능 강화",
        "description": "구글 서비스와의 연동을 통한 업무 효율성 향상"
      }
    ]
  },
  "claude": {
    "name": "Claude",
    "company": "Anthropic",
    "color": "#cc785c",
    "launch_date": "2023-03",
    "korean_users": "21만명",
    "market_share": "24%",
    "milestones": [
      {
        "date": "2023-03",
        "title": "Anthropic Claude 출시",
        "description": "OpenAI 개발자들이 설립한 Anthropic에서 출시"
      },
      {
        "date": "2024-03",
        "title": "Claude 3 시리즈 출시",
        "description": "Haiku, Sonnet, Opus 버전으로 다양한 성능 제공"
      },
      {
        "date": "2025-02",
        "title": "Claude 3.7 소네트 출시",
        "description": "SWE-벤치에서 62.3% 정확도로 1위 달성"
      },
      {
        "date": "2025-05",
        "title": "통합 기능 추가",
        "description": "아틀라시안, 자피어 등 10개 인기 서비스와 연결"
      }
    ]
  },
  "perplexity": {
    "name": "Perplexity AI",
    "company": "Perplexity AI",
    "color": "#20b2aa",
    "launch_date": "2022-12",
    "korean_users": "103만명",
    "market_share": "소규모",
    "milestones": [
      {
        "date": "2022-12",
        "title": "Perplexity AI 출시",
        "description": "AI와 실시간 웹 검색을 결합한 '앤서 엔진'"
      },
      {
        "date": "2023-10",
        "title": "4,035만 건 방문 기록",
        "description": "평균 세션 시간 21분 58초 달성"
      },
      {
        "date": "2024-08",
        "title": "월 2억 5천만 개 질문 처리",
        "description": "AI 검색에 대한 증가하는 수요 반영"
      },
      {
        "date": "2025-03",
        "title": "한국 사용자 103만명",
        "description": "국내 생성형 AI 앱 4위 기록"
      }
    ]
  },
  "grok": {
    "name": "Grok",
    "company": "xAI",
    "color": "#1d9bf0",
    "launch_date": "2023-11",
    "korean_users": "23만명",
    "market_share": "신흥",
    "milestones": [
      {
        "date": "2023-11-03",
        "title": "xAI Grok 첫 출시",
        "description": "일론 머스크 설립 xAI의 고급 챗봇"
      },
      {
        "date": "2024-06",
        "title": "X 플랫폼 통합 강화",
        "description": "실시간 데이터 접근과 소셜 미디어 연동"
      },
      {
        "date": "2025-02-18",
        "title": "Grok 3 공개",
        "description": "이전 버전 대비 10배 연산 능력 향상"
      },
      {
        "date": "2025-03",
        "title": "한국 출시",
        "description": "2주만에 23만명 사용자 확보"
      }
    ]
  },
  "deepseek": {
    "name": "DeepSeek",
    "company": "DeepSeek",
    "color": "#ff6b6b",
    "launch_date": "2023-05",
    "korean_users": "36만명",
    "market_share": "급성장",
    "milestones": [
      {
        "date": "2023-05",
        "title": "중국 DeepSeek 설립",
        "description": "대규모 언어 모델과 추론 모델 개발 시작"
      },
      {
        "date": "2024-12",
        "title": "DeepSeek-R1 모델 개발",
        "description": "600만 달러 비용으로 고성능 추론 모델 개발"
      },
      {
        "date": "2025-01",
        "title": "미국 앱스토어 1위",
        "description": "무료 AI 어시스턴트 앱으로 ChatGPT 제치고 1위"
      },
      {
        "date": "2025-03",
        "title": "한국 사용자 36만명",
        "description": "국내 생성형 AI 앱 6위 기록"
      }
    ]
  }
};

class TimelineApp {
  constructor() {
    this.currentYear = 'all';
    this.activeModels = new Set(Object.keys(aiData));
    this.isDarkTheme = false;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.generateTimeline();
    this.setupThemeToggle();
  }

  setupEventListeners() {
    // Year selector
    document.querySelectorAll('.year-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.handleYearChange(e.target.dataset.year);
      });
    });

    // Legend items
    document.querySelectorAll('.legend-item').forEach(item => {
      item.addEventListener('click', (e) => {
        this.handleLegendClick(e.currentTarget.dataset.model);
      });
    });

    // Modal close
    document.getElementById('modalClose').addEventListener('click', () => {
      this.closeModal();
    });

    document.getElementById('modalOverlay').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        this.closeModal();
      }
    });
  }

  handleYearChange(year) {
    this.currentYear = year;
    
    // Update button states
    document.querySelectorAll('.year-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.year === year);
    });

    this.filterTimeline();
  }

  handleLegendClick(model) {
    if (this.activeModels.has(model)) {
      this.activeModels.delete(model);
    } else {
      this.activeModels.add(model);
    }

    // Update legend item states
    document.querySelectorAll('.legend-item').forEach(item => {
      item.classList.toggle('active', this.activeModels.has(item.dataset.model));
    });

    this.filterTimeline();
  }

  generateTimeline() {
    const tracksContainer = document.getElementById('timelineTracks');
    tracksContainer.innerHTML = '';

    Object.entries(aiData).forEach(([modelKey, modelData]) => {
      const track = this.createTimelineTrack(modelKey, modelData);
      tracksContainer.appendChild(track);
    });
  }

  createTimelineTrack(modelKey, modelData) {
    const track = document.createElement('div');
    track.className = 'timeline-track';
    track.dataset.model = modelKey;

    // Create track line
    const trackLine = document.createElement('div');
    trackLine.className = 'track-line';
    trackLine.style.background = `linear-gradient(90deg, transparent 0%, ${modelData.color} 20%, ${modelData.color} 80%, transparent 100%)`;
    track.appendChild(trackLine);

    // Create nodes for each milestone
    modelData.milestones.forEach(milestone => {
      const node = this.createTimelineNode(modelKey, modelData, milestone);
      track.appendChild(node);
    });

    return track;
  }

  createTimelineNode(modelKey, modelData, milestone) {
    const node = document.createElement('div');
    node.className = 'timeline-node';
    node.style.backgroundColor = modelData.color;
    node.style.left = this.calculateNodePosition(milestone.date) + '%';
    node.dataset.model = modelKey;
    node.dataset.year = milestone.date.split('-')[0];

    // Create label
    const label = document.createElement('div');
    label.className = 'timeline-label';
    label.textContent = milestone.title;
    node.appendChild(label);

    // Add click handler
    node.addEventListener('click', () => {
      this.showMilestoneDetails(modelData, milestone);
    });

    return node;
  }

  calculateNodePosition(dateString) {
    // Parse date (format: YYYY-MM or YYYY-MM-DD)
    const [year, month = 1, day = 1] = dateString.split('-').map(Number);
    const date = new Date(year, month - 1, day);
    
    // Timeline spans from 2022-01 to 2025-12
    const startDate = new Date(2022, 0, 1);
    const endDate = new Date(2025, 11, 31);
    
    const totalDuration = endDate - startDate;
    const currentPosition = date - startDate;
    
    // Convert to percentage with some padding
    const percentage = (currentPosition / totalDuration) * 80 + 10; // 10% padding on each side
    
    return Math.max(5, Math.min(95, percentage));
  }

  filterTimeline() {
    document.querySelectorAll('.timeline-track').forEach(track => {
      const model = track.dataset.model;
      const isModelActive = this.activeModels.has(model);
      
      // Filter by active models
      if (!isModelActive) {
        track.classList.add('hidden');
        return;
      }

      // Filter by year
      if (this.currentYear === 'all') {
        track.classList.remove('hidden');
      } else {
        const hasMatchingYear = Array.from(track.querySelectorAll('.timeline-node'))
          .some(node => node.dataset.year === this.currentYear);
        
        track.classList.toggle('hidden', !hasMatchingYear);
      }

      // Filter individual nodes by year
      track.querySelectorAll('.timeline-node').forEach(node => {
        if (this.currentYear === 'all' || node.dataset.year === this.currentYear) {
          node.style.display = 'block';
        } else {
          node.style.display = 'none';
        }
      });
    });
  }

  showMilestoneDetails(modelData, milestone) {
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
      <h3 style="color: ${modelData.color}">${milestone.title}</h3>
      <div class="company-name">${modelData.company} - ${modelData.name}</div>
      <div class="milestone-date">${this.formatDate(milestone.date)}</div>
      <div class="milestone-description">${milestone.description}</div>
      <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid var(--color-card-border-inner);">
        <div style="font-size: var(--font-size-sm); color: var(--color-text-secondary);">
          <strong>한국 사용자:</strong> ${modelData.korean_users}<br>
          <strong>시장 점유율:</strong> ${modelData.market_share}
        </div>
      </div>
    `;

    document.getElementById('modalOverlay').classList.add('active');
  }

  closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
  }

  formatDate(dateString) {
    const [year, month = 1, day] = dateString.split('-').map(Number);
    
    if (day) {
      return `${year}년 ${month}월 ${day}일`;
    } else {
      return `${year}년 ${month}월`;
    }
  }

  setupThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkTheme = savedTheme === 'dark';
      this.applyTheme();
    }

    themeToggle.addEventListener('click', () => {
      this.isDarkTheme = !this.isDarkTheme;
      this.applyTheme();
      localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    });
  }

  applyTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.theme-icon');
    
    if (this.isDarkTheme) {
      body.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
    } else {
      body.removeAttribute('data-theme');
      themeIcon.textContent = '🌙';
    }
  }
}

// Smooth scrolling utility
function smoothScrollTo(element, duration = 800) {
  const targetPosition = element.offsetLeft;
  const startPosition = element.parentElement.scrollLeft;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    element.parentElement.scrollLeft = run;
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new TimelineApp();

  // Add some interactive enhancements
  const timelineContainer = document.querySelector('.timeline-container');
  if (timelineContainer) {
    // Add horizontal scroll wheel support
    timelineContainer.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        timelineContainer.scrollLeft += e.deltaY;
      }
    });

    // Add touch support for mobile
    let isDown = false;
    let startX;
    let scrollLeft;

    timelineContainer.addEventListener('mousedown', (e) => {
      isDown = true;
      timelineContainer.style.cursor = 'grabbing';
      startX = e.pageX - timelineContainer.offsetLeft;
      scrollLeft = timelineContainer.scrollLeft;
    });

    timelineContainer.addEventListener('mouseleave', () => {
      isDown = false;
      timelineContainer.style.cursor = 'grab';
    });

    timelineContainer.addEventListener('mouseup', () => {
      isDown = false;
      timelineContainer.style.cursor = 'grab';
    });

    timelineContainer.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - timelineContainer.offsetLeft;
      const walk = (x - startX) * 2;
      timelineContainer.scrollLeft = scrollLeft - walk;
    });
  }

  // Add keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key >= '1' && e.key <= '5') {
      const years = ['2022', '2023', '2024', '2025', 'all'];
      const yearIndex = parseInt(e.key) - 1;
      if (yearIndex < years.length) {
        const yearBtn = document.querySelector(`[data-year="${years[yearIndex]}"]`);
        if (yearBtn) yearBtn.click();
      }
    }
  });

  // Add loading animation
  const tracks = document.querySelectorAll('.timeline-track');
  tracks.forEach((track, index) => {
    track.style.animationDelay = `${index * 100}ms`;
  });
});