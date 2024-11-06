import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { CardComponent } from '../card/card.component';
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NgOptimizedImage, CardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  topicArr = [
    {
      id: 1,
      img: 'assets/topic1.jpg',
      title: 'Exploring the Key Components of a Healthy Diet for Better Living',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    },
    {
      id: 2,
      img: 'assets/topic2.jpg',
      title: 'Essential Guidelines for Maintaining a Balanced and Healthy Diet',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    },
    {
      id: 3,
      img: 'assets/topic3.jpg',
      title: 'How to Build a Healthy Diet: Tips for Everyday Nutrition',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    },
    {
      id: 4,
      img: 'assets/topic4.jpg',
      title:
        'Understanding the Importance of a Healthy Diet for Your Well-Being',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    },
    {
      id: 5,
      img: 'assets/topic5.jpg',
      title: 'Healthy Diet Choices: What to Include for Optimal Health',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    },
    {
      id: 6,
      img: 'assets/topic6.jpg',
      title: 'The Role of a Healthy Diet in Preventing Chronic Diseases',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    },
    {
      id: 7,
      img: 'assets/topic7.jpg',
      title: 'Simple Steps to Transition to a Healthier Eating Pattern',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    },
    {
      id: 8,
      img: 'assets/topic8.jpg',
      title: 'The Benefits of a Healthy Diet: Fueling Your Body and Mind',
      description:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et',
    },
  ];
}
