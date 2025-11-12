package HextechHub.HextechHub.services;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

@Service
public class ScrapingService {

    private static final Logger logger = Logger.getLogger(ScrapingService.class.getName());
    private static final int TIMEOUT_SECONDS = 10;
    private static final int PAGE_LOAD_WAIT_MS = 3000;

    /**
     * Scrape dei campioni tier list da Mobalytics
     *
     * @return Lista dei nomi dei campioni con il loro tier
     */
    public List<String> getChampionTiers() {
        WebDriver driver = null;
        try {
            // 1. Setup WebDriverManager
            WebDriverManager.chromedriver().setup();

            // 2. Configura Chrome options
            ChromeOptions options = new ChromeOptions();
            options.addArguments("--headless");
            options.addArguments("--disable-gpu");
            options.addArguments("--no-sandbox");
            options.addArguments("--disable-dev-shm-usage");
            options.addArguments("--window-size=1920,1080");
            options.addArguments("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");

            // 3. Inizializza il driver
            driver = new ChromeDriver(options);
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(TIMEOUT_SECONDS));

            logger.info("Navigazione verso la pagina Mobalytics...");

            // 4. Naviga alla pagina
            driver.get("https://mobalytics.gg/lol/tier-list");

            // 5. Aspetta che gli elementi si carichino (espressione XPath più robusta)
            wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(
                    By.cssSelector("div.m-5kov97")
            ));

            Thread.sleep(PAGE_LOAD_WAIT_MS);

            logger.info("Estrazione dei campioni...");

            // 6. Seleziona gli elementi
            List<WebElement> championElements = driver.findElements(By.cssSelector("div.m-5kov97"));

            logger.info("Trovati " + championElements.size() + " campioni");

            // 7. Estrai il testo
            return championElements.stream()
                    .map(WebElement::getText)
                    .filter(text -> !text.isBlank())
                    .collect(Collectors.toList());

        } catch (InterruptedException e) {
            logger.log(Level.SEVERE, "Thread interrotto durante il scraping", e);
            Thread.currentThread().interrupt();
            return List.of();
        } catch (Exception e) {
            logger.log(Level.SEVERE, "Errore durante il scraping dei campioni", e);
            return List.of();
        } finally {
            // 8. Chiudi il driver
            if (driver != null) {
                try {
                    driver.quit();
                    logger.info("WebDriver chiuso correttamente");
                } catch (Exception e) {
                    logger.log(Level.WARNING, "Errore durante la chiusura del WebDriver", e);
                }
            }
        }
    }

    /**
     * Scrape generico con selettore personalizzato
     *
     * @param url         URL da scrapare
     * @param cssSelector Selettore CSS per gli elementi
     * @return Lista di testi estratti
     */
    public List<String> scrapeElements(String url, String cssSelector) {
        WebDriver driver = null;
        try {
            WebDriverManager.chromedriver().setup();

            ChromeOptions options = new ChromeOptions();
            options.addArguments("--headless", "--disable-gpu", "--no-sandbox");

            driver = new ChromeDriver(options);
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(TIMEOUT_SECONDS));

            logger.info("Scraping URL: " + url);
            driver.get(url);

            wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.cssSelector(cssSelector)));
            Thread.sleep(2000);

            List<WebElement> elements = driver.findElements(By.cssSelector(cssSelector));
            logger.info("Trovati " + elements.size() + " elementi");

            return elements.stream()
                    .map(WebElement::getText)
                    .filter(text -> !text.isBlank())
                    .collect(Collectors.toList());

        } catch (Exception e) {
            logger.log(Level.SEVERE, "Errore durante il scraping", e);
            return List.of();
        } finally {
            if (driver != null) {
                driver.quit();
            }
        }
    }

    /**
     * Scrape di un singolo elemento
     *
     * @param url         URL da scrapare
     * @param cssSelector Selettore CSS per l'elemento
     * @return Testo dell'elemento o stringa vuota se non trovato
     */
    public String scrapeSingleElement(String url, String cssSelector) {
        WebDriver driver = null;
        try {
            WebDriverManager.chromedriver().setup();

            ChromeOptions options = new ChromeOptions();
            options.addArguments("--headless", "--disable-gpu", "--no-sandbox");

            driver = new ChromeDriver(options);
            WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(TIMEOUT_SECONDS));

            driver.get(url);
            wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.cssSelector(cssSelector)));

            WebElement element = driver.findElement(By.cssSelector(cssSelector));
            return element.getText();

        } catch (Exception e) {
            logger.log(Level.SEVERE, "Errore durante il scraping di un elemento singolo", e);
            return "";
        } finally {
            if (driver != null) {
                driver.quit();
            }
        }
    }
}