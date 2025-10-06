import { motion } from 'framer-motion';
import Container from './Container';
import SectionHeader from './SectionHeader';
import NewsletterForm from './NewsletterForm';
import ScreenFrame from './ScreenFrame';

/**
 * Email capture section for launch updates
 */
export default function EmailCapture() {
  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeader 
              title="Be the first to know when we launch"
              subtitle="Subscribe for updates and 20% off when we launch. No spam, we promise."
              centered={false}
              className="mb-8"
            />
            
            <NewsletterForm />
          </motion.div>

          {/* Right Column - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              <ScreenFrame 
                src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzc1IiBoZWlnaHQ9IjgxMiIgdmlld0JveD0iMCAwIDM3NSA4MTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNzUiIGhlaWdodD0iODEyIiBmaWxsPSIjRjlGQUZCIi8+CjxyZWN0IHg9IjIwIiB5PSIxMDAiIHdpZHRoPSIzMzUiIGhlaWdodD0iNjAiIHJ4PSIxMiIgZmlsbD0iIzZDMzlGOSIvPgo8dGV4dCB4PSIxODcuNSIgeT0iMTM1IiBmaWxsPSJ3aGl0ZSIgZm9udC1zaXplPSIxOCIgZm9udC13ZWlnaHQ9IjYwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TXkgZGFzaGJvYXJkPC90ZXh0Pgo8cmVjdCB4PSIyMCIgeT0iMjAwIiB3aWR0aD0iMzM1IiBoZWlnaHQ9IjQwMCIgcng9IjEyIiBmaWxsPSIjRkZGRkZGIiBzdHJva2U9IiNFNUU3RUIiLz4KPGNpcmNsZSBjeD0iNjAiIGN5PSIyNTAiIHI9IjI1IiBmaWxsPSIjNkMzOUY5Ii8+CjxzdmcgeD0iMTAwIiB5PSIyMzAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiPgo8dGV4dCB4PSIwIiB5PSIxNSIgZmlsbD0iIzZCNzM4MCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCI+TXkgRGFzaGJvYXJkPC90ZXh0Pgo8dGV4dCB4PSIwIiB5PSIzNSIgZmlsbD0iIzlCOUJBNCIgZm9udC1zaXplPSIxMiI+JDguNzQ4LjIyPC90ZXh0Pgo8L3N2Zz4KPHN2ZyB4PSIzMDAiIHk9IjIzMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiA1VjE5TTUgMTJIMTkiIHN0cm9rZT0iIzZCNzM4MCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+CjwvdXNlPgo8L3N2Zz4KPGNpcmNsZSBjeD0iNjAiIGN5PSIzMjAiIHI9IjI1IiBmaWxsPSIjQkZGRDM4Ii8+CjxzdmcgeD0iMTAwIiB5PSIzMDAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiPgo8dGV4dCB4PSIwIiB5PSIxNSIgZmlsbD0iIzZCNzM4MCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCI+RmVhc3kgQnVzaW5lc3M8L3RleHQ+Cjx0ZXh0IHg9IjAiIHk9IjM1IiBmaWxsPSIjOUI5QkE0IiBmb250LXNpemU9IjEyIj4kNy44MDQuMTY8L3RleHQ+CjwvdXNlPgo8L3N2Zz4KPGNpcmNsZSBjeD0iNjAiIGN5PSIzOTAiIHI9IjI1IiBmaWxsPSIjNkMzOUY5Ii8+CjxzdmcgeD0iMTAwIiB5PSIzNzAiIHdpZHRoPSIyMDAiIGhlaWdodD0iNDAiPgo8dGV4dCB4PSIwIiB5PSIxNSIgZmlsbD0iIzZCNzM4MCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9IjYwMCI+TmV3IFByb2plY3Q8L3RleHQ+Cjx0ZXh0IHg9IjAiIHk9IjM1IiBmaWxsPSIjOUI5QkE0IiBmb250LXNpemU9IjEyIj4kMCwwMDwvdGV4dD4KPC9zdmc+CjxjaXJjbGUgY3g9IjYwIiBjeT0iNDYwIiByPSIyNSIgZmlsbD0iI0U1RTdFQiIvPgo8c3ZnIHg9IjEwMCIgeT0iNDQwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjQwIj4KPHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiA1VjE5TTUgMTJIMTkiIHN0cm9rZT0iIzlCOUJBNCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+CjwvdXNlPgo8L3N2Zz4KPC9zdmc+"
                alt="Launch Updates"
                className="w-72 md:w-80"
              />
            </motion.div>
            
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

