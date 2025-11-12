package HextechHub.HextechHub.controllers;

import HextechHub.HextechHub.services.ScrapingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/scraping")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ScrapingController {

    @Autowired
    private ScrapingService scrapingService;

    /**
     * Scrape dei campioni tier list da Mobalytics
     * GET /api/scraping/champions/tiers
     */
    @GetMapping("/champions/tiers")
    public ResponseEntity<Map<String, Object>> getChampionTiers() {
        Map<String, Object> response = new HashMap<>();
        try {
            List<String> champions = scrapingService.getChampionTiers();
            response.put("success", true);
            response.put("data", champions);
            response.put("count", champions.size());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * Scrape generico con parametri personalizzati
     * POST /api/scraping/generic
     * Body: {"url": "https://...", "selector": "div.class"}
     */
    @PostMapping("/generic")
    public ResponseEntity<Map<String, Object>> scrapeGeneric(@RequestBody Map<String, String> request) {
        Map<String, Object> response = new HashMap<>();

        String url = request.get("url");
        String selector = request.get("selector");

        if (url == null || url.isBlank() || selector == null || selector.isBlank()) {
            response.put("success", false);
            response.put("error", "URL e selector sono obbligatori");
            return ResponseEntity.badRequest().body(response);
        }

        try {
            List<String> elements = scrapingService.scrapeElements(url, selector);
            response.put("success", true);
            response.put("data", elements);
            response.put("count", elements.size());
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }

    /**
     * Scrape di un singolo elemento
     * POST /api/scraping/single
     * Body: {"url": "https://...", "selector": "div.class"}
     */
    @PostMapping("/single")
    public ResponseEntity<Map<String, Object>> scrapeSingle(@RequestBody Map<String, String> request) {
        Map<String, Object> response = new HashMap<>();

        String url = request.get("url");
        String selector = request.get("selector");

        if (url == null || url.isBlank() || selector == null || selector.isBlank()) {
            response.put("success", false);
            response.put("error", "URL e selector sono obbligatori");
            return ResponseEntity.badRequest().body(response);
        }

        try {
            String element = scrapingService.scrapeSingleElement(url, selector);
            response.put("success", true);
            response.put("data", element);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("success", false);
            response.put("error", e.getMessage());
            return ResponseEntity.internalServerError().body(response);
        }
    }
}

