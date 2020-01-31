import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  public articles = {
    'new-ai-ml-pyramid-recurrent-netowrk': {
      title: 'New AI ML: Pyramid Recurrent Network improves Time Series prediction',
      thumbnail: 'assets/blog/1.png',
      thumbnail_alt_text: '',
      description: `<div dir="ltr" class="reader-article-content"><p>Today, I want to draw your attention to a paper, proposing <strong>Pyramid Recurrent Neural Network</strong>, a novel approach to apply Deep Learning to detect abrupt and gradual changes in time series data.</p> 
      <p>Understanding that Convolutional Neural Networks (CNN) can learn to recognize patterns in multivariate time series partly due to parameter-sharing across time still is a great help. However, there are still limitations in scale invariance which results in not ideal performance when the same pattern shows in an either more gradually or more quickly sequence. The authors address this with Deep Wavelet Neural Networks (DWN) which consist of a Neural Wavelet Layer (NWL - see banner b) followed by parallel streams of CNN (see banner a). The lower right side of the banner shows a Pyramid Recurrent Layer (PRL).</p> 
      <p>The key advantage of a NWL over a conventional convolution layer is that a single wavelet can encode the input with multiple granularities at once, whereas a single convolution only encodes a single granularity. Pyramid Recurrent Neural Networks (PRN) compose a DWN and a PRL. An input time series of arbitrary length is transformed through a DWN into a pyramid-shaped representation, which is then fed into a PRL.</p> 
      <p>Applied to synthetic and real-world data, PRN outperforms other methods in tolerance, higher accuracy in activity recognition and inference performance even in scales not seen during training (banner left: Opportunity Data, banner right: Bee Waggle Dance data).</p> 
      <p>Have fun reading the details in the <a href="https://arxiv.org/abs/1905.06913" target="_blank" rel="nofollow noopener">paper</a> and see you back here next time in New AI ML.</p></div>`,
    },
    'new-ai-ml-you-are-being-watched': {
      title: 'New AI ML: "You are being watched ..."',
      thumbnail: 'assets/blog/2.jfif',
      thumbnail_alt_text: '',
      description: `<div dir="ltr" class="reader-article-content"><p>Just like plotted in George Orwell's legendary (or rather ... at least in parts ... visionary) book 1984, the TV show <em>Person of Interest</em> states in their trailer that "[there is] a secret system: a machine that spies on&nbsp;you&nbsp;every hour of every day."</p> 
      <p>It's now three years since the fifth and last season was shown on live TV ... let's see where we are right now in <strong>face detection</strong>, <strong>pedestrian detection</strong> and <strong>person search</strong> and what would be a better place to start than the Wider Face and Pedestrian Challenge - as it was called in 2018.</p> 
      <p>According to the results <a href="https://arxiv.org/abs/1902.06854" target="_blank" rel="nofollow noopener">published </a>in February this year, a whopping number of 73 teams made valid submissions in the above mentioned three categories.</p> 
      <p>The winning team in the <strong><em>face detection</em></strong><em> track</em> proposed a single stage detector which applied multiple techniques published in recent years. The final results are generated by aggregating the predictions from multiple face detectors. The network structure is based on <em>RetinaNet </em>and <em>Face Attention Network</em> (<em>FAN</em>). <em>RetinaNet </em>uses a Convolutional Neural Network (CNN) like <em>ResNet </em>or <em>MobileNet </em>as backbone, accesses results of some of the backbone's Convolutional Layers for further calculations in a <em>Feature Pyramid Network</em> (FPN) and proves to be particularly robust to varying resolutions and sizes while the <em>FAN </em>approach shows improvements with occlusions (sunglasses, ...). The winning solution (figure banner top right) scored close to 66%. A two-stage face detector based on <em>Faster R-CNN</em> and <em>FPN </em>came in second (figure banner right). <em>Faster R-CNN</em> depend on regional proposal algorithms to hypothesize object locations. The third place team proposed a two stage face detection based on <em>RetinaNet </em>and <em>RefineDet (figure banner center right)</em>. <em>RefineDet </em>is a detector which consists of two interconnected modules that combine the higher accuracy of approaches like <em>Faster R-CNN</em> with the higher efficiency of a one stage approach. WIDER FACE dataset is currently the largest face detection dataset. It contains&nbsp;some 30k images with almost 400k annotated faces with a high degree of variability in scale, pose and occlusion with 40% used for training, 10% for validation and 50% for testing. </p> 
      <p>The <strong><em>pedestrian detection</em></strong> track's main goal is to detect pedestrians and cyclists in a surveillance or car-driving scenario. The winning team's solution <em>Cascade R-CNN </em>uses <em>FPN </em>as backbone and an ensemble of <em>ResNet-50</em>, <em>DenseNet-161</em>, 197 <em>SENet-154</em> and two <em>ResNet-101</em> (figure banner left). <em>ResNet </em>(2015) feeds a convolutional layer with input and the output from the previous layer which makes it easier to train much deeper networks which have higher accuracy. In <em>DenseNet </em>(2016), each layer is connected not only to one predecessor but directly connects also to all other previous layers which strengthens feature propagation. Stacked together SE blocks in <em>SENet (Squeeze-and-Excitation Networks) </em>help to generalize efficiently across different datasets and bring also significant improvements in performance at minimally improved computational cost. This solution scored almost 70% of the 3500 test images of the dataset with a total of about 46k images for training and about 20k images for validation.</p> 
      <p>The <strong><em>person search </em></strong>track's<em> </em>goal is to identify a person in a large data base given just a single portrait.<em> </em>This track's winning team scored almost 77% of detecting cast in 192 movies of which 115 were used for training, 19 for validation and 58 for test. The solution of the winning team contains face detection&amp;recognition, re-ranking based on face feature, person re-id, and re-ranking based on re-id feature. Face detection in this solution is done using Multi-task Cascaded Convolutional Networks, a framework published in 2016 that can improve the performance of face detection and alignment automatically without manual sample selection. The face recognition model backbones include ResNet, InceptionResNet-v2, DenseNet, DPN and MobiletNet. InceptionResNet-v2 is a very deep convolutional network architecture with remarkable performance at relatively low computational cost, here combined with the residual network characteristics which mainly accelerates the training. MobileNet was published in 2017 and has a remarkably small footprint that can be influenced by the user though hyper-parameters (latency vs accuracy). The Re-ID backbones of this winning solution include ResNet-50, ResNet-101, DenseNet-161 and DenseNet-201.</p> 
      <p>The Wider Challenge is an enormous effort to push these three aspects of face and person recognition. Looks to me like we are well on our way to catch up to you, Mr. Finch of Person of Interest ... looking forward to see what this year's Wider Face and Person Challenge going to bring us. Oh ... and ... greetings to George in 1948, have to read this book again one of these days.</p></div>`,
    },
    'new-ai-ml-embarrassingly': {
      title: 'New AI ML: ... embarrassingly ...',
      thumbnail: 'assets/blog/3.jfif',
      thumbnail_alt_text: '',
      description: `<div dir="ltr" class="reader-article-content"><p>AI and Machine Learning is progressing fast - one indicator are papers published. In this series of articles I briefly touch new papers published by the AI and ML community. Today's recommended read is "<em>An embarrassingly simple approach to neural multiple instance classification"</em> by Amina Asif and Fayyaz ul Amir Afsar Minhas.</p> 
      <p>Deep Neural Networks learn from Data in a training process. In Multiple Instance Learning, bags of data are labeled, not instances. Positive bags contain at least one positive example whereas negative bags contain only negative examples. The above mentioned paper presents an approach applicable to any Neural Network architecture which uses a simple bag-level ranking loss function.</p> 
      <p>In a typical binary classification model, a classifier produces a score above or below a certain threshold according to the sample being labeled positive or negative. Instead of a threshold-based loss function applying a penalty if an example is not correctly identified, the authors came up with a ranking-like loss function at the bag level that imposes a penalty when the classifier produces a higher score for a bag labeled <em>negative </em>than it does for a bag labeled <em>positive.</em></p> 
      <p>The authors claim that their method is not only easier to comprehend but also to implement. The latter is owed to the fact that their method for Multiple Instance Classification does not involve any specialized layer type or connections. The paper shows that their approach produces comparable and in some cases better results than other complex methods, in particular for small training data sizes which makes it useful when you don't have a lot of data.</p> 
      <p>Following a good tradition in modern AI the <a href="https://arxiv.org/abs/1905.01947" target="_blank" rel="nofollow noopener">full paper</a> and the <a href="https://github.com/amina01/ESMIL" target="_blank" rel="nofollow noopener">Python code</a> is available - go check it out and let me know what you think. </p></div>`
    }
  };
  public article: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.article = this.articles[id];
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}

}
