package kr.goguma.leica.Seo.vo;

import java.time.LocalDateTime;

public class TodayBestProduct {
    private int id;
    private String title;
    private int cnt;
    private LocalDateTime regDate;

    public TodayBestProduct() {}

    public TodayBestProduct(int id, String title, int cnt, LocalDateTime regDate) {
        this.id = id;
        this.title = title;
        this.cnt = cnt;
        this.regDate = regDate;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getCnt() {
        return cnt;
    }

    public void setCnt(int cnt) {
        this.cnt = cnt;
    }

    public LocalDateTime getRegDate() {
        return regDate;
    }

    public void setRegDate(LocalDateTime regDate) {
        this.regDate = regDate;
    }

    @Override
    public String toString() {
        return "TodayBestProduct{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", cnt=" + cnt +
                ", regDate=" + regDate +
                '}';
    }
} 