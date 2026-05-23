/* ── BACKSTORY ── */
.backstory-section {
  background: #f9f8f6;
  padding: 88px 48px;
  border-top: 1px solid #e8e6e0;
  border-bottom: 1px solid #e8e6e0;
}

.backstory-inner {
  max-width: 960px;
  margin: 0 auto;
}

.backstory-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
  margin-top: 40px;
}

.backstory-left {
  font-size: 26px;
  font-weight: 700;
  line-height: 1.35;
  letter-spacing: -0.5px;
  color: #1a1a18;
}

.backstory-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 4px;
}

.backstory-right p {
  font-size: 16px;
  font-weight: 300;
  color: #555552;
  line-height: 1.75;
}

.backstory-cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 500;
  color: #1a1a18;
  text-decoration: none;
  margin-top: 8px;
  transition: opacity 0.15s;
}

.backstory-cta:hover { opacity: 0.6; }

@media (max-width: 768px) {
  .backstory-section { padding: 60px 24px; }
  .backstory-cols { grid-template-columns: 1fr; gap: 32px; }
  .backstory-left { font-size: 22px; }
}
