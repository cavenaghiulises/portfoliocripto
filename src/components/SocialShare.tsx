import { useState } from "react";
import { Share2, Twitter, Instagram, Facebook, Copy, Check } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "@/hooks/use-toast";

interface SocialShareProps {
  portfolioType: string;
}

const SocialShare = ({ portfolioType }: SocialShareProps) => {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const shareText = `Acabo de crear mi portafolio de inversión cripto personalizado: ${portfolioType}. ¡Descubre el tuyo!`;
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

  const handleShare = (platform: string) => {
    let url = "";
    
    switch (platform) {
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
        break;
      case "facebook":
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case "instagram":
        // Instagram doesn't support direct URL sharing, so we copy the text
        navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
        toast({
          title: "Texto copiado",
          description: "Pega este texto en tu historia de Instagram",
        });
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
          className="flex items-center gap-2"
        >
          <Twitter className="h-4 w-4" />
          Twitter/X
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
          className="flex items-center gap-2"
        >
          <Instagram className="h-4 w-4" />
          Instagram
        </Button>
        
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