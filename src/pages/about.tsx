
import Head from "next/head"
import { Header } from "@/components/landing/Header"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - Saksimerch</title>
        <meta name="description" content="Learn more about SAMER - SAksi MERchandise" />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-8 text-center">About SAMER</h1>
            
            <Card className="max-w-4xl mx-auto">
              <CardContent className="pt-6 space-y-6 text-lg leading-relaxed">
                <p>
                  SAMER, yang merupakan singkatan dari SAksi MERchandise, adalah sebuah inisiatif yang diciptakan oleh organisasi BKSM-SAKSI di Universitas Islam Negeri Mataram. Kami berkomitmen untuk menghadirkan produk-produk merchandise yang tidak hanya berkualitas, tetapi juga mencerminkan semangat dan identitas mahasiswa.
                </p>
                
                <p>
                  Dengan slogan "It's SAMER time!", kami mengajak semua mahasiswa dan civitas akademika untuk merayakan kebersamaan dan kreativitas melalui berbagai produk yang kami tawarkan. SAMER bukan sekadar brand, tetapi sebuah gerakan yang menghubungkan mahasiswa dengan berbagai nilai positif seperti solidaritas, kebanggaan, dan inovasi.
                </p>
                
                <p>
                  Kami percaya bahwa setiap produk yang kami luncurkan adalah wujud dari dedikasi dan kerja keras kolektif. Melalui SAMER, kami berharap dapat memberikan kontribusi nyata untuk memperkuat rasa kebersamaan di lingkungan universitas, serta memberikan wadah bagi mahasiswa untuk mengekspresikan diri mereka.
                </p>
                
                <p>
                  Selain menjual merchandise, website ini juga menyajikan berita terbaru tentang BKSM-SAKSI. Kami ingin memastikan bahwa setiap anggota dan pengunjung dapat tetap terinformasi mengenai kegiatan, acara, dan perkembangan terbaru dari organisasi kami. Dengan mengikuti berita-berita ini, Anda akan lebih dekat dengan setiap langkah yang kami ambil dan dapat berpartisipasi dalam berbagai aktivitas yang kami selenggarakan.
                </p>
                
                <p>
                  Kami juga ingin menekankan bahwa dengan membeli produk kami, Anda turut berkontribusi dalam menghidupi kesenian di kota Mataram. Setiap pembelian yang Anda lakukan membantu mendukung para seniman lokal dan kegiatan seni yang ada di sekitar kita. Dengan demikian, Anda tidak hanya mendapatkan produk yang berkualitas, tetapi juga berpartisipasi dalam memperkuat dan merayakan budaya serta seni di kota tercinta ini.
                </p>
                
                <p className="font-semibold text-center">
                  Mari bergabung dengan kami dalam perjalanan ini dan tunjukkan dukungan Anda terhadap SAMER. Bersama-sama, kita bisa menjadikan momen ini semakin berarti. It's SAMER time!
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </>
  )
}
