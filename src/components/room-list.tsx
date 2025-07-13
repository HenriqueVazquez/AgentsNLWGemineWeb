/** biome-ignore-all assist/source/organizeImports: adjusted biome */

import { useRooms } from "@/http/use-rooms";
import { dayjs } from "@/lib/dayjs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

export function RoomList() {
  const { data, isLoading } = useRooms();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Salas recentes</CardTitle>
        <CardDescription>
          Acesso rápido para as salas criadas recentemente.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-3">
        {isLoading && (
          <p className="text-muted-foreground text-sm">
            Carregando salas...
          </p>
        )}
        {
          data?.map((room) => {
            return (
              <Link className="border flex items-center justify-between  hover:bg-accent/50 p-3 rounded-lg" key={room.id} to={`/room/${room.id}`}>
                <div className="flex-1 flex flex-col gap-1">
                  <h3 className="font-medium">{room.name}</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="text-xs" variant="secondary" >
                      {dayjs(room.createdAt).toNow()}
                    </Badge>
                    <Badge className="text-xs" variant="secondary" >
                      {room.questionsCount} Pergunta{room.questionsCount !== 1 ? "s" : ""}
                    </Badge>

                  </div>
                </div>
                <span className="flex items-center gap-1 text-sm">
                  Entrar
                  <ArrowRight className="size-3" />
                </span>
              </Link>
            )
          })}
      </CardContent>
    </Card >
  )
}