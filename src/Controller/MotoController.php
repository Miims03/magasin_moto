<?php

namespace App\Controller;

use App\Entity\Moto;
use App\Form\MotoType;
use App\Repository\MotoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MotoController extends AbstractController
{
    #[Route('/', name: 'home')]
    public function index(): Response
    {
        return $this->render('base.html.twig');
    }
    #[Route(path: '/moto', name: 'moto')]
    public function moto(Request $request,  EntityManagerInterface $em): Response
    {
        $motos = $em->getRepository(Moto :: class)->findAll();
        $em->flush();
        return $this->render('moto/index.html.twig', [
            'motos' => $motos,
        ]); 
    }
    #[Route(path: '/moto/create', name: 'motocreate')]
    public function motoCreate(Request $request,  EntityManagerInterface $em): Response
    {
        $moto = new Moto;

        $form = $this->createForm(MotoType :: class, $moto);
        $form->handleRequest($request);
        if($form->isSubmitted() && $form->isValid()){
            $em->persist($moto);
            $em->flush();
            $this->addFlash('warning', 'on verra');
            return $this->redirectToRoute('moto');
        }
        return $this->render('moto/create.html.twig',[
            'form' => $form
        ]);


    }
}
