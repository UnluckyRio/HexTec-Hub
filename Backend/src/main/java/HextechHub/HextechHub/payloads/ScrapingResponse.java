package HextechHub.HextechHub.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * Classe per gestire le risposte del servizio di scraping
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ScrapingResponse<T> {
    private boolean success;
    private String message;
    private T data;
    private int count;
    private long timestamp;

    public ScrapingResponse(boolean success, T data, int count) {
        this.success = success;
        this.data = data;
        this.count = count;
        this.timestamp = System.currentTimeMillis();
    }

    public ScrapingResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
        this.timestamp = System.currentTimeMillis();
    }
}

