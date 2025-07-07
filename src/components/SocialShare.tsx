import { useState } from "react";
import { Share2, Twitter, Instagram, Facebook, Copy, Check, Download } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  portfolioType: string;
  chartData?: {
    name: string;
    value: number;
    color: string;
  }[];
  onCaptureChart?: () => Promise<string>;
}

const SocialShare = ({ portfolioType, chartData, onCaptureChart }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const shareText = `Acabo de crear mi portafolio de inversión cripto personalizado con "PortafolioCripto" de @cavenaghiulises.\n\nResultado: ${portfolioType}.\n\n¡Descubre el tuyo!`;
  const shareUrl = window.location.href;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      toast({
        title: "Enlace copiado",
        description: "El enlace ha sido copiado al portapapeles",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar el enlace",
        variant: "destructive",
      });
    }
  };

  const handleDownloadImage = async () => {
    if (!onCaptureChart) return;
    
    try {
      setIsGenerating(true);
      const imageDataUrl = await onCaptureChart();
      
      // Create download link
      const link = document.createElement("a");
      link.download = `portafolio-cripto-${portfolioType.toLowerCase().replace(/\s+/g, "-")}.png`;
      link.href = imageDataUrl;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "Imagen descargada",
        description: "La imagen de tu portafolio ha sido descargada",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo generar la imagen",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const handleShare = async (platform: string) => {
    let url = "";
    
    switch (platform) {
      case "twitter":
        if (onCaptureChart) {
          try {
            setIsGenerating(true);
            await onCaptureChart(); // Generate image for user to download/use
            toast({
              title: "Imagen generada",
              description: "Descarga la imagen y adjúntala al tweet manualmente",
            });
          } catch (error) {
            toast({
              title: "Error",
              description: "No se pudo generar la imagen",
              variant: "destructive",
            });
          } finally {
            setIsGenerating(false);
          }
        }
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "instagram":
        if (onCaptureChart) {
          try {
            setIsGenerating(true);
            await onCaptureChart(); // Generate image for user to download/use
            navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
            toast({
              title: "Texto copiado e imagen lista",
              description: "Descarga la imagen y úsala en tu historia de Instagram",
            });
          } catch (error) {
            navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
            toast({
              title: "Texto copiado",
              description: "Pega este texto en tu historia de Instagram",
            });
          } finally {
            setIsGenerating(false);
          }
        } else {
          navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
          toast({
            title: "Texto copiado",
            description: "Pega este texto en tu historia de Instagram",
          });
        }
        return;
    }
    
    if (url) {
      window.open(url, "_blank", "width=600,height=400");
    }
  };

  return (
    <div className="mt-8 p-6 bg-card border border-border rounded-xl">
      <div className="flex items-center gap-2 mb-4">
        <Share2 className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-medium">Compartir Resultados</h3>
      </div>
      
      <p className="text-muted-foreground mb-4">
        Comparte tu portafolio personalizado con tus amigos
      </p>
      
      <div className="flex flex-wrap gap-3">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare("twitter")}
          disabled={isGenerating}
          className="flex items-center gap-2"
        >
          <Twitter className="h-4 w-4" />
          {isGenerating ? "Generando..." : "Twitter/X"}
        </Button>
        
        <Button
          variant="outline" 
          size="sm"
          onClick={() => handleShare("facebook")}
          className="flex items-center gap-2"
        >
          <Facebook className="h-4 w-4" />
          Facebook
        </Button>
        
        <Button
          variant="outline"
          size="sm" 
          onClick={() => handleShare("instagram")}
          disabled={isGenerating}
          className="flex items-center gap-2"
        >
          <Instagram className="h-4 w-4" />
          {isGenerating ? "Generando..." : "Instagram"}
        </Button>
        
        {onCaptureChart && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownloadImage}
            disabled={isGenerating}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            {isGenerating ? "Generando..." : "Descargar imagen"}
          </Button>
        )}
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyLink}
          className="flex items-center gap-2"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          {copied ? "Copiado" : "Copiar enlace"}
        </Button>
      </div>
    </div>
  );
};

export default SocialShare;