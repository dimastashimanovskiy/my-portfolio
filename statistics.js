// Анимация счётчиков
function animateCounter(element, target, duration = 1500) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeOut);

    element.textContent = current.toLocaleString('ru-RU');

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// Intersection Observer
const observerOptions = { threshold: 0.2, rootMargin: '0px 0px -50px 0px' };

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-count'));
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// 1. Столбчатая диаграмма - Активность по месяцам с контрастными данными
const monthlyData = [
  { label: 'Янв', value: 30, color: '#22d3ee' },
  { label: 'Фев', value: 180, color: '#1fc9e3' },
  { label: 'Мар', value: 65, color: '#1cbfd8' },
  { label: 'Апр', value: 240, color: '#19b5cd' },
  { label: 'Май', value: 95, color: '#16abc2' },
  { label: 'Июн', value: 270, color: '#13a1b7' },
  { label: 'Июл', value: 120, color: '#1097ac' },
  { label: 'Авг', value: 300, color: '#0d8da1' },
  { label: 'Сен', value: 50, color: '#0a8396' }
];

const monthlyActivity = document.getElementById('monthlyActivity');
if (monthlyActivity) {
  const maxValue = Math.max(...monthlyData.map(d => d.value));

  monthlyData.forEach((data, i) => {
    const bar = document.createElement('div');
    bar.className = 'bar-mini';

    const fill = document.createElement('div');
    fill.className = 'bar-fill-mini';
    fill.title = `${data.label}: ${data.value} коммитов`;
    fill.style.background = `linear-gradient(180deg, ${data.color}, #0891b2)`;

    const valueLabel = document.createElement('div');
    valueLabel.className = 'bar-value-mini';
    valueLabel.textContent = data.value;
    fill.appendChild(valueLabel);

    const label = document.createElement('div');
    label.className = 'bar-label-mini';
    label.textContent = data.label;

    bar.appendChild(fill);
    bar.appendChild(label);
    monthlyActivity.appendChild(bar);

    setTimeout(() => {
      fill.style.height = ((data.value / maxValue) * 100) + '%';
    }, i * 80);
  });
}

// 2. Круговая диаграмма - Технологии с правильными цветами
const techData = [
  { name: 'JavaScript', value: 35, color: '#22d3ee' },
  { name: 'React', value: 28, color: '#0891b2' },
  { name: 'Node.js', value: 22, color: '#34d399' },
  { name: 'TypeScript', value: 10, color: '#6366f1' },
  { name: 'Python', value: 5, color: '#94a3b8' }
];

const techPie = document.getElementById('techPie');
const techLegend = document.getElementById('techLegend');

if (techPie && techLegend) {
  const total = techData.reduce((sum, d) => sum + d.value, 0);
  let currentAngle = 0;
  const cx = 70, cy = 70, radius = 60;

  techData.forEach((data, i) => {
    const angle = (data.value / total) * 360;
    const endAngle = currentAngle + angle;
    const largeArc = angle > 180 ? 1 : 0;

    const x1 = cx + radius * Math.cos((currentAngle - 90) * Math.PI / 180);
    const y1 = cy + radius * Math.sin((currentAngle - 90) * Math.PI / 180);
    const x2 = cx + radius * Math.cos((endAngle - 90) * Math.PI / 180);
    const y2 = cy + radius * Math.sin((endAngle - 90) * Math.PI / 180);

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M ${cx} ${cy} L ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} Z`);
    path.setAttribute('fill', data.color);
    path.style.cursor = 'pointer';
    path.style.transition = 'opacity 0.2s, filter 0.2s';

    path.addEventListener('mouseenter', () => {
      path.style.opacity = '0.8';
      path.style.filter = 'brightness(1.2)';
    });
    path.addEventListener('mouseleave', () => {
      path.style.opacity = '1';
      path.style.filter = 'none';
    });

    setTimeout(() => {
      techPie.appendChild(path);
    }, i * 100);

    currentAngle = endAngle;

    // Легенда
    const item = document.createElement('div');
    item.className = 'legend-item-mini';
    item.innerHTML = `
      <div class="legend-color-mini" style="background: ${data.color}"></div>
      <span class="legend-label-mini">${data.name}</span>
      <span class="legend-value-mini">${data.value}%</span>
    `;

    item.addEventListener('mouseenter', () => {
      path.style.opacity = '0.8';
      path.style.filter = 'brightness(1.2)';
    });
    item.addEventListener('mouseleave', () => {
      path.style.opacity = '1';
      path.style.filter = 'none';
    });

    techLegend.appendChild(item);
  });
}

// 3. Прогресс навыков с данными
const skillsData = [
  { name: 'JavaScript', level: 95, hours: 5200 },
  { name: 'React', level: 92, hours: 4100 },
  { name: 'Node.js', level: 88, hours: 3300 },
  { name: 'TypeScript', level: 85, hours: 2800 },
  { name: 'Python', level: 78, hours: 1900 }
];

const skillsProgress = document.getElementById('skillsProgress');
if (skillsProgress) {
  skillsData.forEach((skill, i) => {
    const item = document.createElement('div');
    item.className = 'progress-item';
    item.innerHTML = `
      <div class="progress-header">
        <span class="progress-name">${skill.name} (${skill.hours}ч)</span>
        <span class="progress-value">${skill.level}%</span>
      </div>
      <div class="progress-bar">
        <div class="progress-fill" data-width="${skill.level}"></div>
      </div>
    `;
    skillsProgress.appendChild(item);
  });

  const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.progress-fill[data-width]').forEach((el, i) => {
          setTimeout(() => {
            el.style.width = el.getAttribute('data-width') + '%';
          }, i * 100);
        });
        progressObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  progressObserver.observe(skillsProgress);
}

// 4. Коммиты по дням недели с реальными данными
const weekdayData = [
  { day: 'Пн', commits: 287, percent: 16 },
  { day: 'Вт', commits: 342, percent: 19 },
  { day: 'Ср', commits: 318, percent: 18 },
  { day: 'Чт', commits: 356, percent: 20 },
  { day: 'Пт', commits: 298, percent: 17 },
  { day: 'Сб', commits: 142, percent: 8 },
  { day: 'Вс', commits: 130, percent: 7 }
];

const weekdayCommits = document.getElementById('weekdayCommits');
if (weekdayCommits) {
  const maxCommits = Math.max(...weekdayData.map(d => d.commits));

  weekdayData.forEach((data, i) => {
    const item = document.createElement('div');
    item.className = 'h-bar-item';
    item.innerHTML = `
      <div class="h-bar-label">${data.day}</div>
      <div class="h-bar-track">
        <div class="h-bar-fill" data-width="${(data.commits / maxCommits) * 100}"></div>
      </div>
      <div class="h-bar-value">${data.commits}</div>
    `;
    weekdayCommits.appendChild(item);
  });

  const barsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('#weekdayCommits .h-bar-fill').forEach((el, i) => {
          setTimeout(() => {
            el.style.width = el.getAttribute('data-width') + '%';
          }, i * 80);
        });
        barsObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  barsObserver.observe(weekdayCommits);
}

// 5. Линейный график производительности с данными и цифрами
const performanceData = [
  { month: 'Янв', value: 72, label: '72%' },
  { month: 'Фев', value: 78, label: '78%' },
  { month: 'Мар', value: 68, label: '68%' },
  { month: 'Апр', value: 85, label: '85%' },
  { month: 'Май', value: 81, label: '81%' },
  { month: 'Июн', value: 91, label: '91%' },
  { month: 'Июл', value: 87, label: '87%' },
  { month: 'Авг', value: 95, label: '95%' },
  { month: 'Сен', value: 88, label: '88%' },
  { month: 'Окт', value: 92, label: '92%' },
  { month: 'Ноя', value: 89, label: '89%' },
  { month: 'Дек', value: 97, label: '97%' }
];

const performanceLine = document.getElementById('performanceLine');
if (performanceLine) {
  const width = 800;
  const height = 160;
  const padding = 40;

  const maxValue = 100;
  const minValue = 0;

  const scaleX = (width - padding * 2) / (performanceData.length - 1);
  const scaleY = (height - padding * 2) / maxValue;

  // Линия
  const linePoints = performanceData.map((d, i) => {
    const x = padding + i * scaleX;
    const y = height - padding - d.value * scaleY;
    return `${x},${y}`;
  }).join(' ');

  const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
  polyline.setAttribute('points', linePoints);
  polyline.setAttribute('fill', 'none');
  polyline.setAttribute('stroke', 'url(#lineGradient)');
  polyline.setAttribute('stroke-width', '3');
  polyline.setAttribute('stroke-linecap', 'round');
  polyline.setAttribute('stroke-linejoin', 'round');

  // Область
  const areaPoints = `${padding},${height - padding} ` + linePoints + ` ${padding + (performanceData.length - 1) * scaleX},${height - padding}`;
  const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon.setAttribute('points', areaPoints);
  polygon.setAttribute('fill', 'url(#areaGradient)');

  performanceLine.appendChild(polygon);
  performanceLine.appendChild(polyline);

  // Точки с цифрами
  performanceData.forEach((d, i) => {
    const x = padding + i * scaleX;
    const y = height - padding - d.value * scaleY;

    // Точка
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', '5');
    circle.setAttribute('fill', '#22d3ee');
    circle.setAttribute('stroke', '#0891b2');
    circle.setAttribute('stroke-width', '2');
    circle.style.cursor = 'pointer';

    // Текст значения
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y - 12);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', 'var(--accent)');
    text.setAttribute('font-size', '11');
    text.setAttribute('font-weight', '700');
    text.setAttribute('opacity', '0');
    text.textContent = d.label;

    circle.addEventListener('mouseenter', () => {
      circle.setAttribute('r', '7');
      text.setAttribute('opacity', '1');
    });

    circle.addEventListener('mouseleave', () => {
      circle.setAttribute('r', '5');
      text.setAttribute('opacity', '0');
    });

    performanceLine.appendChild(circle);
    performanceLine.appendChild(text);

    // Подпись месяца внизу
    const monthLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    monthLabel.setAttribute('x', x);
    monthLabel.setAttribute('y', height - padding + 16);
    monthLabel.setAttribute('text-anchor', 'middle');
    monthLabel.setAttribute('fill', 'var(--text-dim)');
    monthLabel.setAttribute('font-size', '10');
    monthLabel.textContent = d.month;
    performanceLine.appendChild(monthLabel);
  });
}

// 6. Тепловая карта активности с данными
const activityHeatmap = document.getElementById('activityHeatmap');
if (activityHeatmap) {
  const weeks = 12;
  const days = 7;

  // Генерируем реалистичные данные активности
  for (let w = 0; w < weeks; w++) {
    const row = document.createElement('div');
    row.className = 'heatmap-row-mini';

    for (let d = 0; d < days; d++) {
      const cell = document.createElement('div');
      cell.className = 'heatmap-cell-mini';

      // Меньше активности на выходных
      const isWeekend = d === 5 || d === 6;
      let level;

      if (isWeekend) {
        level = Math.random() > 0.5 ? Math.floor(Math.random() * 3) : 0;
      } else {
        level = Math.random() > 0.2 ? Math.floor(Math.random() * 5) + 1 : 0;
      }

      if (level > 0) {
        cell.setAttribute('data-level', level);
        const commits = level * 5 + Math.floor(Math.random() * 5);
        cell.title = `${commits} коммитов`;
      } else {
        cell.title = 'Нет активности';
      }

      row.appendChild(cell);
    }

    activityHeatmap.appendChild(row);
  }
}

// 7. Языки программирования с часами
const languagesData = [
  { name: 'JavaScript', hours: 5247, percent: 34 },
  { name: 'TypeScript', hours: 3812, percent: 25 },
  { name: 'HTML/CSS', hours: 3156, percent: 21 },
  { name: 'Python', hours: 2134, percent: 14 },
  { name: 'SQL', hours: 897, percent: 6 }
];

const languages = document.getElementById('languages');
if (languages) {
  const maxHours = Math.max(...languagesData.map(d => d.hours));

  languagesData.forEach((data, i) => {
    const item = document.createElement('div');
    item.className = 'h-bar-item';
    item.innerHTML = `
      <div class="h-bar-label">${data.name}</div>
      <div class="h-bar-track">
        <div class="h-bar-fill" data-width="${(data.hours / maxHours) * 100}"></div>
      </div>
      <div class="h-bar-value">${data.hours}ч</div>
    `;
    languages.appendChild(item);
  });

  const langObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('#languages .h-bar-fill').forEach((el, i) => {
          setTimeout(() => {
            el.style.width = el.getAttribute('data-width') + '%';
          }, i * 80);
        });
        langObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  langObserver.observe(languages);
}

// 8. Радиальные прогресс-бары
function animateRadialProgress(circleId, percentage) {
  const circle = document.getElementById(circleId);
  if (!circle) return;

  const radius = parseFloat(circle.getAttribute('r'));
  const circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = `${circumference} ${circumference}`;
  circle.style.strokeDashoffset = circumference;

  const radialObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const offset = circumference - (percentage / 100) * circumference;
        setTimeout(() => {
          circle.style.strokeDashoffset = offset;
        }, 300);
        radialObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  radialObserver.observe(circle);
}

animateRadialProgress('productivityCircle', 92);
animateRadialProgress('qualityCircle', 95);

// Анимация появления badges
const badges = document.querySelectorAll('.badge-item');
badges.forEach((badge, i) => {
  badge.style.opacity = '0';
  badge.style.transform = 'scale(0.8)';

  const badgeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          badge.style.transition = 'all 0.3s ease';
          badge.style.opacity = '1';
          badge.style.transform = 'scale(1)';
        }, i * 30);
        badgeObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  badgeObserver.observe(badge);
});

// Анимация info cards
const infoCards = document.querySelectorAll('.info-card');
infoCards.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          card.style.transition = 'all 0.4s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 50);
        cardObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cardObserver.observe(card);
});

// Анимация chart cards
const chartCards = document.querySelectorAll('.chart-card');
chartCards.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(15px)';

  const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          card.style.transition = 'all 0.5s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, i * 80);
        chartObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  chartObserver.observe(card);
});

console.log('📊 Статистика загружена! Всего данных:');
console.log('- Коммитов за год:', monthlyData.reduce((sum, d) => sum + d.value, 0));
console.log('- Часов кодинга:', languagesData.reduce((sum, d) => sum + d.hours, 0));
console.log('- Средняя производительность:', Math.round(performanceData.reduce((sum, d) => sum + d.value, 0) / performanceData.length) + '%');
